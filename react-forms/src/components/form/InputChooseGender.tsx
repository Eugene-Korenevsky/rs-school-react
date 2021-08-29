import React from 'react';
import { FormErrors } from './Form';
import SuccessImg from '../../../assets/access.png';


export interface InputChooseGenderProps {
  onChangeHandler: (event: React.FormEvent) => void,
  errors: FormErrors
}

export function InputChooseGender(inputChooseGenderProps: InputChooseGenderProps): JSX.Element {
  return <div className="form-field">
    <div className="input-wrapper input-gender">
      <div onChange={inputChooseGenderProps.onChangeHandler}>
        <input type="radio" value="Male" name="gender" id="form-radio-male" /> Male
        <input type="radio" value="Female" name="gender" id="form-radio-female" /> Female
        <input type="radio" value="Other" name="gender" id="form-radio-other" /> Other
      </div>
    </div>
    {inputChooseGenderProps.errors.gender ?
      <p className="form__error">This field is required</p> :
      <img className="form__success-img" src={SuccessImg} alt="success"></img>
    }
  </div>
}