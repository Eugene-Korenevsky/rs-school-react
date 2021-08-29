import { NewsIns } from "../model/News";

export class StorageUtil {
  public setNewsInStorage = (news: NewsIns[]): void => {
    localStorage.setItem('news', JSON.stringify(news));
  }

  public getNewsFromLocalStorage = (): NewsIns[] | null => {
    const res = localStorage.getItem('news')
    if (res) {
      const articles = JSON.parse(res);
      return articles;
    } 
    return null
        
  }
}

export const storageUtil = new StorageUtil();