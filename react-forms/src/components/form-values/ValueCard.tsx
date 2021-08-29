import React from 'react';
import { FormValues } from '../FormPage';

export interface ValueCardProps {
  formValues: FormValues
}

export function ValueCard(valueCardProps: ValueCardProps): JSX.Element {
  return <div className="value-card">
    <p>Name: {valueCardProps.formValues.name}</p>
    <p>Surname: {valueCardProps.formValues.surname}</p>
    <p>Country: {valueCardProps.formValues.country}</p>
    <p>Birthday: {valueCardProps.formValues.birthday}</p>
    <p>Agree: {valueCardProps.formValues.agree? `true` : `false`}</p>
    <p>Gender: {valueCardProps.formValues.gender}</p>
  </div>
}