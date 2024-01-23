import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Avatar } from '@mui/material';
import DefaultAvatarWolf from '../../assets/static/DefaultAvatar.png';
import ProfileButtonsForm from '@/features/ProfileButtonsForm';
import ProfileInputField from '@/features/ProfileInputField';
import { FormProfileSchema } from '@/libs/ValidationSchema/FormProfileSchema';

export type FormProfileType = {
  name: string;
  surname: string;
  nickname: string;
  email: string;
  phone: string;
  password: string;
};

export default function ProfileContentPage() {
  const methods = useForm<FormProfileType>({
    defaultValues: {
      name: '',
      surname: '',
      nickname: '',
      email: '',
      phone: '',
      password: 'default',
    },
    resolver: yupResolver(FormProfileSchema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<FormProfileType> = async (data) => {
    console.log(data);
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
      <Avatar sx={{ width: '120px', height: '120px' }} alt="аватар" src={DefaultAvatarWolf} />

      <FormProvider {...methods}>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          component="form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <ProfileInputField />
          <ProfileButtonsForm />
        </Box>
      </FormProvider>
    </Box>
  );
}
