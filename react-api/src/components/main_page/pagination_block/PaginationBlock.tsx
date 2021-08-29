import React from 'react';
import PageButtons from './PageButtons';
import { SelectPageSize } from './SelectPageSize';

export interface PaginationBlockProps {
    pageSize: number
    page: number
    totalResults: number
    onPageClickHandler: (page: number) => void
    onPageSizeChangeHandler: (event: React.FormEvent) => void
}

export default function PaginationBlock(paginationBlockProps: PaginationBlockProps) {
    return <div className="pagination-block-wrapper">
        <PageButtons page={paginationBlockProps.page} pageSize={paginationBlockProps.pageSize} totalResults={paginationBlockProps.totalResults}
            onPageClickHandler={paginationBlockProps.onPageClickHandler}></PageButtons>
        <SelectPageSize onChangeHandler={paginationBlockProps.onPageSizeChangeHandler}></SelectPageSize>
    </div>
}