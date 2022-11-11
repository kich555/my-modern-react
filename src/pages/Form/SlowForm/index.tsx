import { useReducer, useState } from 'react';
import type { FormEvent, ChangeEvent, FocusEvent } from 'react';
import { fieldNames, getFieldError } from '../utils';
import SlowInput from './SlowInput';



const initialFieldValues: Record<string, string> = {};
const initialTouchedFields: Record<string, boolean> = {};

export default function SlowForm() {
  const [fieldValues, setFieldValues] = useReducer(
    (state: typeof initialFieldValues, action: typeof initialFieldValues) => ({
      ...state,
      ...action,
    }),
    initialFieldValues,
  );
  const [touchedFields, setTouchedFields] = useReducer(
    (state: typeof initialTouchedFields, action: typeof initialTouchedFields) => ({
      ...state,
      ...action,
    }),
    initialTouchedFields,
  );
  const [wasSubmitted, setWasSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formIsValid = fieldNames.every(name => !getFieldError(fieldValues[name]));
    setWasSubmitted(true);
    if (formIsValid) {
      console.log(`Slow Form Submitted`, fieldValues);
    }
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFieldValues({ [event.currentTarget.name]: event.currentTarget.value });
  }
  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    setTouchedFields({ [event.currentTarget.name]: true });
  }
  return (
    <form noValidate onSubmit={handleSubmit}>
      {fieldNames.map(name => (
        <SlowInput key={name} name={name} fieldValues={fieldValues} touchedFields={touchedFields} wasSubmitted={wasSubmitted} handleChange={handleChange} handleBlur={handleBlur} />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
