import {
  createAsyncThunk, createSlice, PayloadAction, Reducer,
} from '@reduxjs/toolkit';
import { News, NewsError, NewsIns } from '../model/News';
import { QuestioQueryParams } from '../model/QuestionQueryParams';
import { newsService } from '../services/NewsSerivce';
import { storageUtil  } from '../utils/StorageUtil';

export interface NewsSearchResult {
  totalResults: number
  articles: NewsIns[]
}

interface NewsState {
  newsSearchResult: NewsSearchResult
  currentNews: NewsIns
  notFound: boolean
  error: NewsError

}
const initialState: NewsState = {
  newsSearchResult: {
    totalResults: 0,
    articles: [],
  },
  currentNews: {
    source: { id: 0, name: '' },
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    content: '',
  },
  notFound: false,
  error: {
    error: false,
    code: 0,
    message: ''
  }

};

const initState = (): void => {
  const news = storageUtil.getNewsFromLocalStorage();
  if (news) {
    initialState.newsSearchResult.articles = news.articles
    initialState.newsSearchResult.totalResults = news.totalResults
  }
}

initState();

export const searchNews = createAsyncThunk(
  'news/fetchAll',
  async (params: QuestioQueryParams): Promise<News> => {
    const res = await newsService.getResult(params.page, params.pageSize, params.question, params.sortType);
    return res;
  },
);

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<NewsSearchResult>): void => {
      action.payload.articles.forEach((article: NewsIns, index: number): void => {
        article.source.id = index + 1;
      });
      state.newsSearchResult.articles = action.payload.articles;
      state.newsSearchResult.totalResults = action.payload.totalResults;
    },

    getNewsById: (state, action: PayloadAction<number>): void => {
      if (state.newsSearchResult.articles.length < action.payload - 1) state.notFound = true;
      else{
        state.notFound = false;
        state.currentNews = state.newsSearchResult.articles[action.payload - 1];
      } 
    },

    changeNotFound: (state, action: PayloadAction<boolean>): void => {
      state.notFound = action.payload;
    },
  },
  extraReducers: (builder) => {

    builder.addCase(searchNews.pending, (state) => {
      state.error.error = false;
      state.error.message = '';
      state.error.code = 0;
    });

    builder.addCase(searchNews.fulfilled,
      (state, { payload }) => {
        if (!payload.error) {
          state.newsSearchResult.totalResults = payload.totalResults
          state.newsSearchResult.articles = payload.articles
          storageUtil.setNewsInStorage(payload)
        } else {
          state.error.error = true;
          state.error.message = payload.error.message;
          state.error.code = payload.error.code;
        }
      });

    builder.addCase(searchNews.rejected,
      (state) => {
        state.error.error = true;
        state.error.message = 'oops something went wrong';
        state.newsSearchResult.articles = [];
        state.newsSearchResult.totalResults = 0;
      });
  }
});

const { actions, reducer } = newsSlice;

export const { setNews, getNewsById, changeNotFound, } = actions;

export default reducer as Reducer<NewsState>;
