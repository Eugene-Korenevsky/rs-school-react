import React from 'react';
import PageButtons from './PageButtons';
import { SelectPageSize } from './SelectPageSize';

export interface PaginationBlockProps {
  onPageClickHandler: (page: number) => void
  onPageSizeChangeHandler: (event: React.FormEvent) => void
}

export default function PaginationBlock(paginationBlockProps: PaginationBlockProps): JSX.Element {
  return <div className="pagination-block-wrapper">
    <PageButtons onPageClickHandler={paginationBlockProps.onPageClickHandler}></PageButtons>
    <SelectPageSize onChangeHandler={paginationBlockProps.onPageSizeChangeHandler}></SelectPageSize>
  </div>;
}
