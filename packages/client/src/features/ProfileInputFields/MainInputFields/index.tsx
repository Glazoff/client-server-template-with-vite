import { Controller, useFormContext } from 'react-hook-form';
import { Box, TextField } from '@mui/material';
import { FormProfileType } from '@/widgets/ProfileContentPage/FormMainContent';

export default function ProfileInputField() {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormProfileType>();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Controller
          name="first_name"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{ minHeight: '90px' }}
              label="Имя"
              fullWidth
              variant="outlined"
              {...field}
              error={!!errors.first_name}
              helperText={errors.first_name?.message}
            />
          )}
        />

        <Controller
          name="second_name"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{ minHeight: '90px' }}
              label="Фамилия"
              fullWidth
              variant="outlined"
              {...field}
              error={!!errors.second_name}
              helperText={errors.second_name?.message}
            />
          )}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{ minHeight: '90px' }}
              label="Почта"
              type="email"
              fullWidth
              variant="outlined"
              {...field}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{ minHeight: '90px' }}
              label="Телефон"
              type="tel"
              fullWidth
              variant="outlined"
              {...field}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />
      </Box>
      <Controller
        name="login"
        control={control}
        render={({ field }) => (
          <TextField
            sx={{ minHeight: '90px' }}
            label="Никнейм"
            variant="outlined"
            {...field}
            error={!!errors.login}
            helperText={errors.login?.message}
          />
        )}
      />
    </Box>
  );
}
