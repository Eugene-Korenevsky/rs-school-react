import React, { useEffect, useState } from 'react';
import { FormErrors } from './Form';
import SuccessImg from '../../../assets/access.png';

export interface InputAgreeProps {
    onChangeHandler: (event: React.FormEvent) => void,
    errors: FormErrors
}

export function InputAgree(inputAgreeProps: InputAgreeProps) {
    return         <div className="form-field">
    <div className="input-wrapper form__agree">
        <label className="form__label form__agree-label" htmlFor="checkbox">I agree with rules:</label>
        <input
            onChange={inputAgreeProps.onChangeHandler}
            className="form__input form__agree-input"
            name="checkbox"
            type="checkbox"
            id="form-checkbox"
        />
    </div>
    {inputAgreeProps.errors.agree ?
        <p className="form__error">This field is required</p> :
        <img className="form__success-img" src={SuccessImg} alt="success"></img>
    }
</div>
}