import isObject from './is-object';
import getArrayKeys from './get-array-keys';

export default function isEqual(a: any, b: any): boolean {
  a = isObject(a) ? a.valueOf() : a;
  b = isObject(b) ? b.valueOf() : b;

  if (!isObject(a)) {
    if (Number.isNaN(a)) {
      return Number.isNaN(b);
    }

    return a === b;
  }

  if (!isObject(b)) {
    return false;
  }

  const isArrayA = Array.isArray(a);
  const isArrayB = Array.isArray(b);

  if (isArrayA !== isArrayB) {
    return false;
  }

  const objAKeys = isArrayA ? getArrayKeys(a) : Object.keys(a);
  const objBKeys = isArrayB ? getArrayKeys(b) : Object.keys(b);

  if (objAKeys.length !== objBKeys.length) {
    return false;
  }

  for (const key of objAKeys) {
    const result = isEqual(a[key], b[key]);

    if (!result) {
      return false;
    }
  }

  return true;
}
