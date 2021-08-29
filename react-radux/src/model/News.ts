export interface NewsIns{
  source: { id: number, name: string }
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

export interface News {
  totalResults: number
  articles: NewsIns[]
  error: NewsError
}

export interface NewsError {
  error: boolean,
  code: number,
  message: string
}
