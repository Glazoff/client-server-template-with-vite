import * as yup from 'yup';
import { regexpLogin, regexpName, regexpPhone } from '@/shared/constants/validConstants';
import { FormProfileType } from '@/widgets/ProfileContentPage/FormMainContent';

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
