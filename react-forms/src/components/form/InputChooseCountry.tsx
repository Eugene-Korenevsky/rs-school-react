import React, { useEffect, useState } from 'react';
import { FormErrors } from './Form';
import SuccessImg from '../../../assets/access.png';

export interface InputCountryChooseProps {
    onChangeHandler: (event: React.FormEvent) => void,
    errors: FormErrors
}

export function InputCountryChoose(inputCountryChooseProps: InputCountryChooseProps): JSX.Element {
    return  <div className="form-field">
    <div className="input-wrapper">
        <label className="form__label" htmlFor="select-country">Country:</label>
        <select
            onChange={inputCountryChooseProps.onChangeHandler}
            className="form__input"
            name="select-country"
            id="form-select"
            defaultValue="">
            <option disabled value="">Choose your country</option>
            <option value="Беларусь">Беларусь</option>
            <option value="Украина">Украина</option>
            <option value="Россия">Россия</option>
            <option value="Польша">Польша</option>
            <option value="Литва">Литва</option>
        </select>
    </div>
    {inputCountryChooseProps.errors.country ?
        <p className="form__error">This field is required</p> :
        <img className="form__success-img" src={SuccessImg} alt="success"></img>
    }
</div>
}