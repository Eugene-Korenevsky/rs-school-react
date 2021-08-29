import { SortType } from "./SortType";

export interface SearchParams {
  page: number
  pageSize: number
  sortType: SortType
  searchVal: string
}