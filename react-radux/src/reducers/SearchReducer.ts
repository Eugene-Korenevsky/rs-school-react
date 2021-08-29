import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchParams } from '../model/SearchParams';
import { SortType } from '../model/SortType';
import { storageUtil } from '../utils/StorageUtil';

const initialState: SearchParams = {
  page: 1,
  pageSize: 10,
  sortType: SortType.POPULARITY,
  searchVal: '',
};

const initState = (): void => {
  const params = storageUtil.getSearchParams();
  if (params) {
    initialState.page = params.page
    initialState.pageSize = params.pageSize
    initialState.searchVal = params.searchVal
    initialState.sortType = params.sortType
  }
}

initState();

export const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>): void => {
      state.page = action.payload;
      storageUtil.setSearchParams(state)
    },
    changePageSize: (state, action: PayloadAction<number>): void => {
      state.pageSize = action.payload;
      storageUtil.setSearchParams(state)
    },
    changeSortType: (state, action: PayloadAction<SortType>): void => {
      state.sortType = action.payload;
      storageUtil.setSearchParams(state)
    },
    changeSearchVal: (state, action: PayloadAction<string>): void => {
      state.searchVal = action.payload;
      storageUtil.setSearchParams(state)
    },
  },
});

const { actions, reducer } = searchParamsSlice;

export const {
  changePage, changePageSize, changeSortType, changeSearchVal,
} = actions;

// export const selectSearchParams = (state: RootState) => state.searchParams

export default reducer;
