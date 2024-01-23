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
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{ minHeight: '80px' }}
              label="Имя"
              fullWidth
              variant="standard"
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
              sx={{ minHeight: '80px' }}
              label="Фамилия"
              fullWidth
              variant="standard"
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
              sx={{ minHeight: '80px' }}
              label="Никнейм"
              fullWidth
              variant="standard"
              {...field}
              error={!!errors.nickname}
              helperText={errors.nickname?.message}
            />
          )}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{ minHeight: '80px' }}
              label="Почта"
              type="email"
              fullWidth
              variant="standard"
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
              sx={{ minHeight: '80px' }}
              label="Телефон"
              type="tel"
              fullWidth
              variant="standard"
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
              sx={{ minHeight: '80px' }}
              label="Пароль"
              type={!showPassword ? 'text' : 'password'}
              variant="standard"
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
