import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import { Box, TextField, InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { FormProfileType } from '@/widgets/ProfileContentPage';

export default function ProfileInputField() {
  const [showPassword, setShowPassword] = React.useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{ minHeight: '90px' }}
              label="Имя"
              fullWidth
              variant="outlined"
              {...field}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />

        <Controller
          name="surname"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{ minHeight: '90px' }}
              label="Фамилия"
              fullWidth
              variant="outlined"
              {...field}
              error={!!errors.surname}
              helperText={errors.surname?.message}
            />
          )}
        />
        <Controller
          name="nickname"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{ minHeight: '90px' }}
              label="Никнейм"
              fullWidth
              variant="outlined"
              {...field}
              error={!!errors.nickname}
              helperText={errors.nickname?.message}
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
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              disabled
              sx={{ minHeight: '90px' }}
              label="Пароль"
              type={!showPassword ? 'text' : 'password'}
              variant="outlined"
              {...field}
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {!showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Box>
    </Box>
  );
}
