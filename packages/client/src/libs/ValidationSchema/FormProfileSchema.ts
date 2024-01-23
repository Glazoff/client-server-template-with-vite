import * as yup from 'yup';
import { FormProfileType } from '@/widgets/ProfileContentPage';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: error message
export const FormProfileSchema: yup.ObjectSchema<FormProfileType> = yup.object({
  name: yup.string().min(5, 'Минимум 5 букв'),
  surname: yup.string().min(5, 'Минимум 5 букв'),
  nickname: yup.string().min(2, 'Минимум 2 букв'),
  email: yup.string().email('Укажите почту в формате you@yandex.ru'),
  phone: yup.string().matches(phoneRegExp, 'Не правильный формат телефона'),
  password: yup.string().min(3, 'Минимум 3 символа').max(15, 'Максимум 15 символов'),
});
