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

export interface News {
    totalResults: number
    articles: NewsIns[]
}