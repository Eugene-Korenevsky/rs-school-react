class PaginationUtil {
     public getLastPage(pageSize: number, totalResults: number): number {
         return Math.floor(totalResults / pageSize);
     }
}

export const paginationUtil = new PaginationUtil();