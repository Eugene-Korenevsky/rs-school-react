import { SortType } from "./SortType";


export interface QuestioQueryParams {
  page: number
  pageSize: number
  question: string
  sortType: SortType
}