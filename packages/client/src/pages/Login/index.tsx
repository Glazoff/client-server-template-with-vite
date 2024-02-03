import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Stack, Box, TextField, Button, Typography } from '@mui/material';
import { BUTTONS } from '../../shared/buttonsDict.ts';
import path from '@/App/Router/constants.js';
import { getUser, signIn } from '@/shared/api/apiAuth.js';
import { updateUser } from '@/store/userSlice.js';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const changeUser = (data) => {
    dispatch(updateUser(data));
  };

  const handleReqAuth = async () => {
    try {
      await signIn({ login, password });
      const data = await getUser();
      changeUser(data);
      navigate(path.Main);
      console.log('changeUser(data);', data);
    } catch (e) {
      console.error(e);
    }
  };

  const onChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Box component={'section'} sx={{ display: 'flex', height: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <form>
          <Box
            sx={{
              borderRadius: '15px',
              border: '6px solid #00A3FF',
              width: '400px',
              height: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <Typography>Авторизация</Typography>
            <TextField
              name="login"
              fullWidth={true}
              margin="normal"
              label="Логин"
              variant="outlined"
              placeholder="Введите ваш логин"
              onChange={onChangeLogin}
            />
            <TextField
              name="password"
              type="password"
              fullWidth={true}
              margin="normal"
              label="Пароль"
              variant="outlined"
              placeholder="Введите ваш пароль"
              onChange={onChangePassword}
            />
            <Stack
              display="flex"
              flexDirection={'row'}
              gap={'10px'}
              width={'100%'}
              marginBottom={'10px'}
              marginTop={'10px'}
            >
              <Button sx={{ width: '50%' }} variant="default" onClick={handleReqAuth}>
                {BUTTONS.enter.ru.text}
              </Button>
              <Button sx={{ width: '50%' }} variant="orange">
                {BUTTONS.register.ru.text}
              </Button>
            </Stack>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
