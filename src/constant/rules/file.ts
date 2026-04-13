import { FILE_MIMETYPE } from '../common';
export const FILE_RULE = {
  NAME: {
    NAME: 'name',
    MAX_LENGTH: 255,
  },
  DESCRIPTION: {
    NAME: 'description',
    MAX_LENGTH: 500,
  },
  FILE: {
    MIMETYPE: FILE_MIMETYPE.PDF,
  },
};
