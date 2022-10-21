import { useState } from 'react';
import { values } from 'lodash-es';
import type { FormEvent } from 'react';
import { fieldNames, getFieldError } from '../utils';
import FastInput from './FastInput';

export default function FastForm() {
  const [wasSubmitted, setWasSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());

    const formIsValid = values(fieldValues).every(value => !getFieldError(value));

    setWasSubmitted(true);
    if (formIsValid) {
      event.currentTarget.reset();
      console.log(`Fast Form Submitted`, fieldValues);
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      {fieldNames.map(name => (
        <FastInput key={name} name={name} wasSubmitted={wasSubmitted} />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
