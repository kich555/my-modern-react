import type { ChangeEvent, FocusEvent } from 'react';
import { getFieldError } from '../utils';

export default function SlowInput({
  name,
  fieldValues,
  touchedFields,
  wasSubmitted,
  handleChange,
  handleBlur,
}: {
  name: string;
  fieldValues: Record<string, string>;
  touchedFields: Record<string, boolean>;
  wasSubmitted: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: FocusEvent<HTMLInputElement>) => void;
}) {
  const value = fieldValues[name];
  const touched = touchedFields[name];
  const errorMessage = getFieldError(value);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;
  return (
    <div key={name}>
      <label htmlFor={`${name}-input`}>{name}:</label>{' '}
      <input
        id={`${name}-input`}
        name={name}
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        pattern="[a-z]{3,10}"
        required
        aria-describedby={displayErrorMessage ? `${name}-error` : undefined}
      />
      {displayErrorMessage ? (
        <span role="alert" id={`${name}-error`} className="error-message">
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
}
