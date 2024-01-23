import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import { Box, TextField, InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { FormChangePasswordProfile } from '@/widgets/ProfileContentPage/FormChangePassword';

export default function ChangePasswordInputFields() {
  const [showPassword, setShowPassword] = React.useState(true);
  const [showOldPassword, setShowOldPassword] = React.useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowOldPassword = () => setShowOldPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const {
    control,
    formState: { errors },
  } = useFormContext<FormChangePasswordProfile>();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Controller
        name="oldPassword"
        control={control}
        render={({ field }) => (
          <TextField
            sx={{ minHeight: '90px' }}
            label="Старый пароль"
            type={!showOldPassword ? 'text' : 'password'}
            variant="outlined"
            {...field}
            error={!!errors.oldPassword}
            helperText={errors.oldPassword?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowOldPassword}
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

      <Controller
        name="newPassword"
        control={control}
        render={({ field }) => (
          <TextField
            sx={{ minHeight: '90px' }}
            label="Новый пароль"
            type={!showPassword ? 'text' : 'password'}
            variant="outlined"
            {...field}
            error={!!errors.newPassword}
            helperText={errors.newPassword?.message}
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
  );
}
