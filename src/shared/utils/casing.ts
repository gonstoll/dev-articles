import {Dictionary} from '../entities';
import {isObject} from '../helpers';

function isCaseConvertible(obj: unknown): obj is object | any[] {
  return isObject(obj) || Array.isArray(obj);
}

/**
 * Converts snake_case string to camelCase string
 */
function camelCase(input: string) {
  return input.replace(/([-_][a-z])/gi, s => {
    return s.toUpperCase().replace('-', '').replace('_', '');
  });
}

function convertEnumerableKeys(obj: unknown): any {
  if (Array.isArray(obj)) {
    return obj.map(item => convertEnumerableKeys(item));
  } else if (typeof obj !== 'object' || obj === null) {
    return obj;
  } else {
    return Object.keys(obj).reduce((collector: Dictionary<unknown>, key) => {
      const value = (obj as Dictionary<unknown>)[key];
      collector[camelCase(key)] = convertEnumerableKeys(value);
      return collector;
    }, {});
  }
}

export function camelCaseMiddleware<T extends unknown>(obj: T): T {
  if (isCaseConvertible(obj)) {
    return convertEnumerableKeys(obj);
  }
  return obj;
}
