import * as dotenv from 'dotenv';
dotenv.config();

export enum APIPrefix {
  Version = 'api/v1',
}

export enum SortOrder {
  Ascending = 1, // tăng dần
  Descending = -1, // giảm dần
}

export enum BooleanEnum {
  FALSE = '0',
  TRUE = '1',
}

export const DEFAULT_COLLATION = {
  locale: 'vi',
};

export const FORMAT_CODE_PERMISSION = 'USER_';

export const DEFAULT_REGION_MINIO = 'vi';

export const TIMEZONE_LOCAL = 'Asia/Ho_Chi_Minh';

export const FILE_MIMETYPE = {
  PDF: ['application/pdf'],
};

export const UPLOAD_MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB

export enum ReportDealBehaviorTypeEnum {
  Day = 'DAY',
  Week = 'WEEK',
  Month = 'MONTH',
}

export enum ReportDealRevenueTypeEnum {
  Day = 'DAY',
  Week = 'WEEK',
  Month = 'MONTH',
}

export const MIMETYPE_FILE_EXCEL = [
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-excel',
];

export enum MIME_TYPE_IMAGE_ENUM {
  APNG = 'image/apng',
  AVIF = 'image/avif',
  GIF = 'image/gif',
  JPEG = 'image/jpeg',
  PNG = 'image/png',
  SVG = 'image/svg+xml',
  WEBP = 'image/webp',
  BMP = 'image/bmp',
}

export enum MIME_TYPE_DOCUMENT_ENUM {
  PDF = 'application/pdf',
  DOC = 'application/msword',
  DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  PPT = 'application/vnd.ms-powerpoint',
  PPTX = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  XLS = 'application/vnd.ms-excel',
  DOC_XCFB = 'application/x-cfb',
  HTML = 'text/html',
}

export enum MIME_TYPE_TEXT_ENUM {
  TXT = 'text/plain',
  CSV = 'text/csv',
}

export enum ActionEnum {
  No = '0',
  Yes = '1',
}

export enum ActiveEnum {
  Inactive = 0,
  Active = 1,
}

export const TIMEZONE_LOCAL_HOUR = +7;

export const FORMAT_DAY_EXPORT = 'DD-MM-YYYY';

export enum HeaderKeyEnum {
  X_REQUEST_ID = 'X-Request-ID',
  X_REQUEST_TIME = 'X-Request-Time',
}
