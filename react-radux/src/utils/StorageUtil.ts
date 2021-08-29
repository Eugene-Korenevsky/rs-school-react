import { News } from "../model/News";
import { SearchParams } from "../model/SearchParams";

export class StorageUtil {
  public setNewsInStorage = (news: News): void => {
    localStorage.setItem('news', JSON.stringify(news));
  }

  public getNewsFromLocalStorage = (): News | null => {
    const res = localStorage.getItem('news')
    if (res) {
      const articles = JSON.parse(res);
      return articles;
    } 
    return null;       
  }

  public setSearchParams = (searchParams: SearchParams): void => {
    localStorage.setItem('searchParams', JSON.stringify(searchParams));
  }

  public getSearchParams = (): SearchParams | null => {
    const res = localStorage.getItem('searchParams')
    if (res) {
      const articles = JSON.parse(res);
      return articles;
    } 
    return null;       
  }
}

export const storageUtil = new StorageUtil();