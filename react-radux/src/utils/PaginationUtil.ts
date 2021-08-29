class PaginationUtil {
  
  public getLastPage = (pageSize: number, totalResults: number): number => Math.floor(totalResults / pageSize)
}

export const paginationUtil = new PaginationUtil();
