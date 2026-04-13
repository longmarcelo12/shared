import { every, isEmpty, isString } from 'lodash';
import * as moment from 'moment';

export function countWorkingDays(
  fromDate: moment.Moment,
  toDate: moment.Moment,
) {
  let workingDays = 0;

  while (fromDate <= toDate) {
    if (fromDate.day() !== 0 && fromDate.day() !== 6) {
      workingDays++;
    }

    fromDate.add(1, 'days');
  }

  return workingDays;
}

export const isAllEmptyOrNull = (obj: any) => {
  return every(Object.values(obj), (value) => isEmpty(value));
};

export const trimStr = (str: any) => {
  try {
    if (!str || !isString(str)) {
      return str;
    }

    return str.trim();
  } catch (e) {
    return str;
  }
};
