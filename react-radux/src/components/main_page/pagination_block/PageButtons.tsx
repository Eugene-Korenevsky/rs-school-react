import React from 'react';
import { useAppSelector } from '../../../app/Hooks';
import { paginationUtil } from '../../../utils/PaginationUtil';

export interface PageButtonsProps {
  onPageClickHandler: (page: number) => void
}

export default function PageButtons(pageButtonsProps: PageButtonsProps): JSX.Element {
  const page = useAppSelector((state) => state.searchParams.page);

  const pageSize = useAppSelector((state) => state.searchParams.pageSize);

  const totalResults = useAppSelector((state) => state.news.newsSearchResult.totalResults);

  const elsePaginationButtons: JSX.Element[] = [];

  if (page === 1) {
    for (let i = 0; i < 3; i++) {
      elsePaginationButtons.push(<button key={i}
        className={`page-buttons__button ${page === page + (i + 2) ? 'sort-block__button-active' : ''}`}
        onClick={(): void => pageButtonsProps.onPageClickHandler(page + (i + 2))}>{page + (i + 2)}
      </button>);
    }
  } else if (page === 2) {
    for (let i = 0; i < 3; i++) {
      elsePaginationButtons.push(<button key={i}
        className={`page-buttons__button ${page === page + (i + 1) ? 'sort-block__button-active' : ''}`}
        onClick={(): void => pageButtonsProps.onPageClickHandler(page + (i + 1))}>{page + (i + 1)}
      </button>);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      elsePaginationButtons.push(<button key={i}
        className={`page-buttons__button ${page === page + i ? 'sort-block__button-active' : ''}`}
        onClick={(): void => pageButtonsProps.onPageClickHandler(page + i)}>{page + i}
      </button>);
    }
  }

  return <div className="page-buttons-wrapper">
    <button className={`page-buttons__button ${page === 1 ? 'sort-block__button-active' : ''}`}
      onClick={(): void => pageButtonsProps.onPageClickHandler(1)}>{1}
    </button>
    <button className={`page-buttons__button ${page === 2 ? 'sort-block__button-active' : ''}`}
      onClick={(): void => pageButtonsProps.onPageClickHandler(2)}>{2}
    </button>
    {elsePaginationButtons}
    <span className="page-buttons__span">...</span>
    <button
      className={`page-buttons__button ${page === paginationUtil.getLastPage(pageSize, totalResults)
        ? 'sort-block__button-active' : ''}`}
      onClick={(): void => pageButtonsProps.onPageClickHandler(paginationUtil.getLastPage(pageSize, totalResults))}>
      {paginationUtil.getLastPage(pageSize, totalResults)}
    </button>
  </div>;
}
