import { createSlice, PayloadAction, Reducer,} from '@reduxjs/toolkit';
import { NewsIns } from '../model/News';

export interface NewsSearchResult {
  totalResults: number
  articles: NewsIns[]
}

interface NewsState {
  newsSearchResult: NewsSearchResult
  currentNews: NewsIns
  notFound: boolean

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

};

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
      else state.notFound = false;
      state.currentNews = state.newsSearchResult.articles[action.payload - 1];
    },

    changeNotFound: (state, action: PayloadAction<boolean>): void => {
      state.notFound = action.payload;
    },
  },
});

const { actions, reducer } = newsSlice;

export const { setNews, getNewsById, changeNotFound } = actions;

export default reducer as Reducer<NewsState>;
