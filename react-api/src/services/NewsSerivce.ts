import { News } from "../model/News";
import { QueryParams } from "../model/QueryParams";
import { SortType } from "../model/SortType";
import { RestService } from "./RestService";

class NewsService extends RestService {
  private readonly key: string = '6a8746a850dd4cb9a97a108329723644'

  constructor() {
    super('https://newsapi.org/v2/everything')
  }

  public async getResult(page: number, pageSize: number, question: string, sortType: SortType): Promise<News> {
    const queryParams: QueryParams = {
      q: question,
      sortBy: sortType,
      pageSize,
      page,
      apiKey: this.key
    }
    const news = await this.get('',queryParams);
    if(news.status === 426) {
      const res = {
        totalResults: 0,
        articles: [],
        error: {
          error: true,
          code: 426,
          message: 'You have requested too many results.' + 
          ' Developer accounts are limited to a max of 100 results. You are trying to request results' + 
          ' 100 to 110. Please upgrade to a paid plan if you need more results.'
        }
      }
      return res 
    }
    return news.json();
  }

}

export const newsService = new NewsService();