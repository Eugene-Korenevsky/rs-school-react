import React, { useEffect, useState } from 'react';
import Form from './form/Form';
import './form.css';
import { ValueCard } from './form-values/ValueCard';

export interface FormValues {
  name: string,
  surname: string,
  birthday: string,
  gender: string,
  country: string,
  agree: boolean
}

export default function FormPage(): JSX.Element {
  const values: FormValues[] = [];

  const [valuesArr, setValuesArr] = useState(values);

  useEffect(() => {
  }, [valuesArr])

  const onSubmitHandler = (res: FormValues): void => {
    const newValues: FormValues[] = [...valuesArr];
    newValues.push(res)
    setValuesArr(newValues);
  }

  return <div className="form-wrapper">
    <Form onSubmitHandler={onSubmitHandler}></Form>
    <div className="values-wrapper">
      {valuesArr.map((value, index): JSX.Element => <ValueCard key={index} formValues={value}></ValueCard>)}
    </div>
  </div>
}