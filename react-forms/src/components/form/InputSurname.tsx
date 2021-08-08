import React, { useEffect, useState } from 'react';
import { FormErrors } from './Form';
import SuccessImg from '../../../assets/access.png';

export interface InputSurnameProps {
    surname: string,
    onChangeHandler: (event: React.FormEvent) => void,
    errors: FormErrors
}

export function InputSurname(inputSurnameProps: InputSurnameProps): JSX.Element {
     return  <div className="form-field">
     <div className="input-wrapper">
         <label className="form__label" htmlFor="surname">Surname:</label>
         <input onChange={inputSurnameProps.onChangeHandler}
             className="form__input" name="surname" type="text" value={inputSurnameProps.surname} />
     </div>
     {inputSurnameProps.errors.surname ?
         <p className="form__error">Surname is required and must have more then 3 letters</p> :
         <img className="form__success-img" src={SuccessImg} alt="success"></img>
     }
 </div>
}