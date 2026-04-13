import { parseInt } from 'lodash';

// covert "GDV_C1" ===> { code: 'GDV', level: 1 }
export const parseUserRole = (
  user: any,
): { user_role: string; user_level: string | number } => {
  const code = user?.roles[0]?.code;
  if (!code) {
    return { user_role: '', user_level: '' };
  }

  const parts = code.split('_');
  let user_level = parseInt(parts.pop().slice(1));
  let user_role = parts.join('_');

  if (!user_role) user_role = code;
  if (!user_level) user_level = user?.roleLevel ?? '';

  return { user_role, user_level };
};

export const checkBetween = (x: number, min: number, max: number): boolean => {
  return min <= x && x < max;
};
