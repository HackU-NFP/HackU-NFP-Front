import _ from 'lodash';
const EMPTY = '';
export default class RequestBodyFlattener {
  static flatten(requestBody = {}) {
    const objBody = _.cloneDeep(requestBody);
    const flatPair = {};
    Object.keys(objBody).forEach((key) => {
      const value = objBody[key];
      if (Array.isArray(value)) {
        let allSubKeys = [];
        value.forEach((elem) => {
          allSubKeys = _.union(allSubKeys, Object.keys(elem));
        });

        value.forEach((elem) => {
          allSubKeys.forEach((subKey) => {
            const flatKey = `${key}.${subKey}`;
            const flatRawValue = elem[subKey] ? elem[subKey] : EMPTY;
            const prevFlatValue = flatPair[flatKey];
            flatPair[flatKey] = _.isUndefined(prevFlatValue)
              ? flatRawValue
              : `${prevFlatValue},${flatRawValue}`;
          });
        });
      } else {
        flatPair[key] = objBody[key];
      }
    });

    return Object.keys(flatPair)
      .sort()
      .map((key) => `${key}=${flatPair[key]}`)
      .join('&');
  }
}
