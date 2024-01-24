import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import ProfileButtonsChangePassword from '@/features/ProfileButtonsChangePassword';
import ChangePasswordInputFields from '@/features/ProfileInputFields/ChangePasswordInputFields';
import { FormChangePasswordSchema } from '@/libs/ValidationSchema/FormChangePasswordSchema';
import { baseUrl } from '@/shared/loadersApi/loaderProfile';

export type FormChangePasswordProfile = {
  oldPassword: string;
  newPassword: string;
};

export default function ProfileChangePassword() {
  const methods = useForm<FormChangePasswordProfile>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
    },
    resolver: yupResolver(FormChangePasswordSchema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<FormChangePasswordProfile> = async (data) => {
    //TODO: Сделать redux и отрефакторить в следующем спринте.
    try {
      const request = await fetch(`${baseUrl}/user/password`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const response = await request.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        jusctifyContent: 'center',
        gap: '30px',
        alignItems: 'center',
      }}
    >
      <FormProvider {...methods}>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          component="form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <ChangePasswordInputFields />
          <ProfileButtonsChangePassword />
        </Box>
      </FormProvider>
    </Box>
  );
}
