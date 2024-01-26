import * as yup from 'yup';
import {
  regexpLogin,
  regexpName,
  regexpPhone,
  minName,
  minLogin,
  maxLogin,
} from '@/shared/constants/validConstants';
import { FormProfileType } from '@/widgets/ProfileContentPage/FormMainContent';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: error message
export const FormProfileSchema: yup.ObjectSchema<FormProfileType> = yup.object({
  first_name: yup
    .string()
    .min(minName, `Минимум ${minName} букв`)
    .matches(regexpName, '1 буква должна быть заглавной'),
  second_name: yup
    .string()
    .min(minName, `Минимум ${minName} букв`)
    .matches(regexpName, '1 буква должна быть заглавной'),
  login: yup
    .string()
    .min(minLogin, `Минимум ${minLogin} букв`)
    .max(maxLogin, `Максимум ${maxLogin} букв`)
    .matches(regexpLogin, 'Должна быть буква, заглавная буква цифра. Только латтиница'),
  email: yup.string().email('Укажите почту в формате you@yandex.ru'),
  phone: yup.string().matches(regexpPhone, 'Не правильный формат телефона'),
  display_name: yup.string(),
});
