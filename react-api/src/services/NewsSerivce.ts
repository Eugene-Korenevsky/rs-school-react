import { News } from "../model/News";
import { QueryParams } from "../model/QueryParams";
import { SortType } from "../model/SortType";
import { RestService } from "./RestService";

class NewsService extends RestService {
    private readonly key: string = '6a8746a850dd4cb9a97a108329723644'
    constructor(baseUrl: string) {
        super(baseUrl)
    }

    public async getResult(page: number, pageSize: number, question: string, sortType: SortType): Promise<News> {
        const queryParams: QueryParams = {
            q: question,
            sortBy: sortType,
            pageSize: pageSize,
            page: page,
            apiKey: this.key
        }
        const news = await this.get('',queryParams);
        return news.json();
    }

}

export const newsService = new NewsService('https://newsapi.org/v2/everything');