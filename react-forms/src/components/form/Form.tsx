import React, { useEffect, useState } from 'react';
import { formUtil } from '../../utils/FormUtil';
import '../form.css';
import { FormValues } from '../FormPage';
import { InputBirthday } from './InputBirthday';
import { InputCountryChoose } from './InputChooseCountry';
import { InputChooseGender } from './InputChooseGender';
import { InputName } from './InputName';
import { InputSurname } from './InputSurname';
import { InputAgree } from './InputAgree';

export interface FormProps {
  onSubmitHandler: (res: FormValues) => void;
}

export interface FormErrors {
  name: boolean,
  surname: boolean,
  birthday: boolean,
  gender: boolean,
  country: boolean,
  agree: boolean
}

export default function Form(formProps: FormProps): JSX.Element {

  const formErrors: FormErrors = {
    name: true,
    surname: true,
    birthday: true,
    gender: true,
    country: true,
    agree: true
  }

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [country, setCountry] = useState('');
  const [agree, setAgree] = useState(false);
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState(formErrors);
  const [valid, setValid] = useState(false);

  const validate = (): void => {
    const res = formUtil.validForm(name, surname, birthday, country, agree, gender);
    setErrors(res);
    if (formUtil.isValidForm(res)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  useEffect((): void => {
    validate();
  }, [name, surname, birthday, country, gender, agree]);
  
  const onFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setName('');
    setSurname('');
    setCountry('');
    setBirthday('');
    setGender('');
    setAgree(false);
    setValid(false);
    formUtil.cleanForm();
    const values: FormValues = {
      name,
      surname,
      birthday,
      country,
      agree,
      gender
    }
    formProps.onSubmitHandler(values);
  }

  const onCheckBoxHandler = (event: React.FormEvent): void => {
    const res = !!(event.target as HTMLInputElement).checked;
    setAgree(res);
  }

  const getInputValue = (event: React.FormEvent): string => (event.target as HTMLInputElement).value

  return <form onSubmit={onFormSubmit} className="form">
    <InputName name={name} errors={errors} onChangeHandler={(event: React.FormEvent): void => {
      setName(getInputValue(event));
    }} ></InputName>
    <InputSurname surname={surname} errors={errors} onChangeHandler={(event: React.FormEvent): void => {
      setSurname(getInputValue(event));
    }}></InputSurname>
    <InputBirthday onChangeHandler={(event: React.FormEvent): void => { setBirthday(getInputValue(event)) }}
      birthday={birthday} errors={errors}></InputBirthday>
    <InputCountryChoose onChangeHandler={(event: React.FormEvent): void => { setCountry(getInputValue(event)) }}
      errors={errors}></InputCountryChoose>
    <InputAgree onChangeHandler={(event: React.FormEvent): void => 
    { onCheckBoxHandler(event) }} errors={errors}></InputAgree>
    <InputChooseGender onChangeHandler={(event: React.FormEvent): void => { setGender(getInputValue(event)) }}
      errors={errors}></InputChooseGender>
    {valid ?
      <input className="form__submit" type="submit" value="SUBMIT" /> :
      <div></div>
    }
  </form>
}