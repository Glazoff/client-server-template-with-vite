import * as yup from 'yup';
import { FormChangePasswordProfile } from '@/widgets/ProfileContentPage/FormChangePassword';

const regexpPaswword = /^.*(([A-Z].*[\d])|([\d].*[A-Z])).*$/;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: error message
export const FormChangePasswordSchema: yup.ObjectSchema<FormChangePasswordProfile> = yup.object({
  oldPassword: yup
    .string()
    .min(8, 'Минимум 3 символа')
    .max(40, 'Максимум 15 символов')
    .matches(regexpPaswword, 'Только латтиница. Должна быть цифра, заглавная буква'),
  newPassword: yup
    .string()
    .min(8, 'Минимум 3 символа')
    .max(40, 'Максимум 15 символов')
    .matches(regexpPaswword, 'Только латтиница. Должна быть цифра, заглавная буква'),
});
