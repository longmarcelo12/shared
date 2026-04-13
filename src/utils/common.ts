import Big from 'big.js';
import { isEmpty } from 'lodash';
import * as moment from 'moment';

export const minus = (first: number, second: number): number => {
  return Number(new Big(first).minus(new Big(second)));
};

export const plus = (first: number, second: number): number => {
  return Number(new Big(first).plus(new Big(second)));
};

export const mul = (first: number, second: number): number => {
  return Number(new Big(first).mul(new Big(second)));
};

export const div = (first: number, second: number): number => {
  return Number(new Big(first).div(new Big(second)));
};

export const escapeCharForSearch = (str: string): string => {
  return str.toLowerCase().replace(/[?%\\_]/gi, function (x) {
    return '\\' + x;
  });
};

export const formatNumber = (value: any, num = 2): any => {
  try {
    if (!value || value == 0) {
      return 0;
    }
    return parseFloat(value.toFixed(num));
  } catch (e) {
    return value;
  }
};

export const customToFixed = (value, num = 2, isString = false): any => {
  if (!value || value == 0) {
    return value;
  }
  value = +value;
  return isString ? `${value.toFixed(num)}` : parseFloat(value.toFixed(num));
};

export const getTotalPage = (totalRecord: number, limit): number => {
  return Math.ceil((totalRecord || 0) / (limit || 10));
};

export enum EnumSort {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum StatusPermission {
  ACTIVE = 1,
  INACTIVE = 0,
}

export const chunkArray = (array: string[], size = 100) => {
  const chunkedUsers = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedUsers.push(array.slice(i, i + size));
  }

  return chunkedUsers;
};

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const diffMonth = (date1: string, date2: string): number => {
  if (!date1 || !date2) {
    return 99;
  }

  const dateMoment1 = moment(date1);
  const dateMoment2 = moment(date2);
  return dateMoment1.diff(dateMoment2, 'months');
};

export const getStartEndDate = (
  date: string,
  dateInputFormat: string,
  dateOutputFormat: string,
) => {
  const startDate = moment(date, dateInputFormat)
    .startOf('month')
    .format(dateOutputFormat);
  const endDate = moment(date, dateInputFormat)
    .endOf('month')
    .format(dateOutputFormat);
  return { startDate, endDate };
};

export const formatVnPhoneNumber = (
  phoneNumber: string,
  prefix?: string,
): string => {
  return !isEmpty(phoneNumber)
    ? phoneNumber.replace(/^(0|\+84|84)/, prefix || '84')
    : phoneNumber;
};
