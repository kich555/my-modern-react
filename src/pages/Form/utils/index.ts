import invariant from 'tiny-invariant';

export function getFieldError(value: FormDataEntryValue) {
  if (!value) return 'field is required';
  invariant(typeof value === 'string', `${value} must be string`);

  const valueIsLowerCase = value === value.toLowerCase();
  const valueIsLongEnough = value.length >= 3;
  const valueIsShortEnough = value.length <= 10;

  if (!valueIsLowerCase) {
    return 'value must be lower case';
  } else if (!valueIsLongEnough) {
    return 'value must be at least 3 characters long';
  } else if (!valueIsShortEnough) {
    return 'value must be no longer than 10 characters';
  }
  return null;
}

const FIELDS_COUNT = 10;

export const fieldNames = Array.from({ length: FIELDS_COUNT }, (v = undefined, index) => `field${index}`);
