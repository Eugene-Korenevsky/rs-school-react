import React, { useEffect, useState } from 'react';
import { FormErrors } from './Form';
import SuccessImg from '../../../assets/access.png';

export interface InputBirthdayProps {
    birthday: string,
    onChangeHandler: (event: React.FormEvent) => void,
    errors: FormErrors
}

export function InputBirthday(inputBirthdayProps: InputBirthdayProps): JSX.Element {
    return <div className="form-field">
    <div className="input-wrapper">
        <label className="form__label" htmlFor="birthday">BirthDay:</label>
        <input onChange={inputBirthdayProps.onChangeHandler}
            className="form__input" name="birthday" type="date" value={inputBirthdayProps.birthday} />
    </div>
    {inputBirthdayProps.errors.birthday ?
        <p className="form__error">This field is required</p> :
        <img className="form__success-img" src={SuccessImg} alt="success"></img>
    }
</div>
}