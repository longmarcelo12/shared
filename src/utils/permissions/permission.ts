import { USER_PERMISSION, USER_GROUP_PERMISSION } from './user';

export const PERMISSION = [...USER_PERMISSION];

export const GROUP_PERMISSION = [USER_GROUP_PERMISSION];

export const INSERT_PERMISSION = {
  permission: PERMISSION,
  groupPermission: GROUP_PERMISSION,
};
