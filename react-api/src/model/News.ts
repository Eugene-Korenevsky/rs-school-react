export interface NewsIns{
  source: {id: string, name: string}
  author: string,
  title: string, 
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

export interface NewsError {
  error: boolean,
  code: number,
  message: string
}

export interface News {
  totalResults: number
  articles: NewsIns[]
  error: NewsError
}