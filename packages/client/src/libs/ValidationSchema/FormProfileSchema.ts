import * as yup from 'yup';
import { FormProfileType } from '@/widgets/ProfileContentPage/FormMainContent';

const regexpName = /^[A-ZА-Я][a-zA-Zа-я-А-Я-]*$/;
const regexpLogin = /^[\da-zA-Z_-]*[a-zA-Z][\da-zA-Z_-]*$/;
const regexpPhone = /^(\+)?[\d]{10,15}$/;

//TODO: Расширенный регекс для валидации телефона.
// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: error message
export const FormProfileSchema: yup.ObjectSchema<FormProfileType> = yup.object({
  first_name: yup
    .string()
    .min(2, 'Минимум 2 букв')
    .matches(regexpName, '1 буква должна быть заглавной'),
  second_name: yup
    .string()
    .min(2, 'Минимум 2 букв')
    .matches(regexpName, '1 буква должна быть заглавной'),
  login: yup
    .string()
    .min(3, 'Минимум 3 букв')
    .max(20, 'Максимум 20 букв')
    .matches(regexpLogin, 'Должна быть буква, заглавная буква цифра. Только латтиница'),
  email: yup.string().email('Укажите почту в формате you@yandex.ru'),
  phone: yup.string().matches(regexpPhone, 'Не правильный формат телефона'),
  display_name: yup.string(),
});
