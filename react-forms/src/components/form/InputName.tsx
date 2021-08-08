import React, { useEffect, useState } from 'react';
import { FormErrors } from './Form';
import SuccessImg from '../../../assets/access.png';

export interface InputNameProps {
    name: string,
    onChangeHandler: (event: React.FormEvent) => void,
    errors: FormErrors
} 

export function InputName(inputNameProps: InputNameProps): JSX.Element {
    return <div className="form-field">
    <div className="input-wrapper">
        <label className="form__label" htmlFor="name">Name:</label>
        <input
            onChange={inputNameProps.onChangeHandler}
            value={inputNameProps.name}
            className="form__input" name="name" type="text" />
    </div>
    {inputNameProps.errors.name ?
        <p className="form__error">Name is required and must have more then 3 letters</p> :
        <img className="form__success-img" src={SuccessImg} alt="success"></img>
    }
</div>
}