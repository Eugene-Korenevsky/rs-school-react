import React from 'react';
import { paginationUtil } from '../../../utils/PaginationUtil';

export interface PageButtonsProps {
    onPageClickHandler: (page: number) => void
    page: number
    pageSize: number
    totalResults: number

}

export default function PageButtons(pageButtonsProps: PageButtonsProps): JSX.Element {
    const elsePaginationButtons: JSX.Element[] = []
    if (pageButtonsProps.page === 1) {
        for (let i = 0; i < 3; i++) {
            elsePaginationButtons.push(<button key={i}
                className={`page-buttons__button ${pageButtonsProps.page === pageButtonsProps.page + (i + 2) ? "sort-block__button-active" : ""}`}
                onClick={(): void => pageButtonsProps.onPageClickHandler(pageButtonsProps.page + (i + 2))}>{pageButtonsProps.page + (i + 2)}
            </button>)
        }
    } else {
        for (let i = 0; i < 3; i++) {
            elsePaginationButtons.push(<button key={i}
                className={`page-buttons__button ${pageButtonsProps.page === pageButtonsProps.page + i ? "sort-block__button-active" : ""}`}
                onClick={(): void => pageButtonsProps.onPageClickHandler(pageButtonsProps.page + i)}>{pageButtonsProps.page + i}
            </button>)
        } 
    }

    return <div className="page-buttons-wrapper">
        <button className={`page-buttons__button ${pageButtonsProps.page === 1 ? "sort-block__button-active" : ""}`}
            onClick={(): void => pageButtonsProps.onPageClickHandler(1)}>{1}
        </button>
        <button className={`page-buttons__button ${pageButtonsProps.page === 2 ? "sort-block__button-active" : ""}`}
            onClick={(): void => pageButtonsProps.onPageClickHandler(2)}>{2}
        </button>
        {elsePaginationButtons}
        <span className="page-buttons__span">...</span>
        <button
            className={`page-buttons__button ${pageButtonsProps.page === paginationUtil.getLastPage(pageButtonsProps.pageSize, pageButtonsProps.totalResults)
                ? "sort-block__button-active" : ""}`}
            onClick={(): void => pageButtonsProps.onPageClickHandler(paginationUtil.getLastPage(pageButtonsProps.pageSize, pageButtonsProps.totalResults))}>
            {paginationUtil.getLastPage(pageButtonsProps.pageSize, pageButtonsProps.totalResults)}
        </button>
    </div>

}