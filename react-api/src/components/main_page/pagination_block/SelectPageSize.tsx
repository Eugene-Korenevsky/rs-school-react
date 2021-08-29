import React from 'react';

export interface SelectPageSizeProps {
  onChangeHandler: (event: React.FormEvent) => void
}

export function SelectPageSize(selectPageSizeProps: SelectPageSizeProps): JSX.Element {
  return <div className="form-field">
    <div className="input-wrapper">
      <label className="form__label" htmlFor="select-country">Page size:</label>
      <select
        onChange={selectPageSizeProps.onChangeHandler}
        className="form__input"
        name="select-country"
        id="form-select"
        defaultValue="10">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  </div>
}