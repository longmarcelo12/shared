import * as moment from 'moment/moment';

export const DATE_FORMAT = 'YYYY-MM-DD';
export const FORMAT_DATE_TIME = 'YYYYMMDD';
export const UTC_DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss[Z]';
export const DATE_TIME_FORMAT_1 = 'DD/MM/YYYY';
export const DATE_TIME_FORMAT_2 = 'YYYY-MM-DD HH:mm:ss';

export const getCurrentDateTime = (date?: Date): number => {
  const currentDate = date ? date : new Date();
  return Number(moment(currentDate).startOf('day').format(FORMAT_DATE_TIME));
};
