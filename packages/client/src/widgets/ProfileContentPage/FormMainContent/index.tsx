import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import ProfileButtonsForm from '@/features/ProfileButtonsForm';
import ProfileInputField from '@/features/ProfileInputFields/MainInputFields';
import { FormProfileSchema } from '@/libs/ValidationSchema/FormProfileSchema';
import { editProfile } from '@/shared/api/apiProfile';

export type FormProfileType = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
  password: string;
  display_name: string;
};

export default function FormMainContent() {
  const { profileData } = useOutletContext<{
    profileData: any;
  }>();
  const methods = useForm<FormProfileType>({
    defaultValues: {
      first_name: profileData.first_name,
      second_name: profileData.second_name,
      login: profileData.login,
      email: profileData.email,
      phone: profileData.phone,
      display_name: '',
    },
    resolver: yupResolver(FormProfileSchema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<FormProfileType> = async (data) => {
    //TODO: Сделать redux и отрефакторить в следующем спринте.
    editProfile(data);
  };
  return (
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
  );
}
