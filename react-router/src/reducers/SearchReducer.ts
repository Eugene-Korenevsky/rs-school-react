import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortType } from '../model/SortType';

export interface SearchParams {
  page: number
  pageSize: number
  sortType: SortType
  searchVal: string
}

const initialState: SearchParams = {
  page: 1,
  pageSize: 10,
  sortType: SortType.POPULARITY,
  searchVal: '',
};

export const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>): void => {
      state.page = action.payload;
    },
    changePageSize: (state, action: PayloadAction<number>): void => {
      state.pageSize = action.payload;
    },
    changeSortType: (state, action: PayloadAction<SortType>): void => {
      state.sortType = action.payload;
    },
    changeSearchVal: (state, action: PayloadAction<string>): void => {
      state.searchVal = action.payload;
    },
  },
});

const { actions, reducer } = searchParamsSlice;

export const {
  changePage, changePageSize, changeSortType, changeSearchVal,
} = actions;

// export const selectSearchParams = (state: RootState) => state.searchParams

export default reducer;
