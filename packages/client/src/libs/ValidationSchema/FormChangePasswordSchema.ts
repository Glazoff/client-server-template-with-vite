import * as yup from 'yup';
import { regexpPaswword, minPassword, maxPassword } from '@/shared/constants/validConstants';
import { FormChangePasswordProfile } from '@/widgets/ProfileContentPage/FormChangePassword';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: error message
export const FormChangePasswordSchema: yup.ObjectSchema<FormChangePasswordProfile> = yup.object({
  oldPassword: yup
    .string()
    .min(minPassword, `Минимум ${minPassword} символа`)
    .max(maxPassword, `Максимум ${maxPassword} символов`)
    .matches(regexpPaswword, 'Только латтиница. Должна быть цифра, заглавная буква'),
  newPassword: yup
    .string()
    .min(minPassword, `Минимум ${minPassword} символа`)
    .max(maxPassword, `Максимум ${maxPassword} символов`)
    .matches(regexpPaswword, 'Только латтиница. Должна быть цифра, заглавная буква'),
});
