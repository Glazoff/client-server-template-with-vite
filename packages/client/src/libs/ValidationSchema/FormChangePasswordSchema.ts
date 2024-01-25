import * as yup from 'yup';
import { regexpPaswword } from '@/shared/constants/validConstants';
import { FormChangePasswordProfile } from '@/widgets/ProfileContentPage/FormChangePassword';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: error message
export const FormChangePasswordSchema: yup.ObjectSchema<FormChangePasswordProfile> = yup.object({
  oldPassword: yup
    .string()
    .min(8, 'Минимум 8 символа')
    .max(40, 'Максимум 40 символов')
    .matches(regexpPaswword, 'Только латтиница. Должна быть цифра, заглавная буква'),
  newPassword: yup
    .string()
    .min(8, 'Минимум 8 символа')
    .max(40, 'Максимум 40 символов')
    .matches(regexpPaswword, 'Только латтиница. Должна быть цифра, заглавная буква'),
});
