// ----- Password
export const minPassword = 8;
export const maxPassword = 40;
// ----- Name
export const minName = 2;
// --- Login
export const minLogin = 3;
export const maxLogin = 20;

// ---- REGEX

export const regexpName = /^[A-ZА-Я][a-zA-Zа-я-А-Я-]*$/;
export const regexpLogin = /^[\da-zA-Z_-]*[a-zA-Z][\da-zA-Z_-]*$/;
export const regexpPhone = /^(\+)?[\d]{10,15}$/;
// TODO: Расширенный регес к телефонам.
export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const regexpPaswword = /^.*(([A-Z].*[\d])|([\d].*[A-Z])).*$/;
