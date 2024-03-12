import { SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Stack, Box, TextField, Button, Typography, styled } from '@mui/material';
import path from '@/App/Router/constants.js';
import { getUser, signIn } from '@/shared/api/apiAuth.js';
import BUTTONS from '@/shared/buttonDict/index.js';
import { User, updateUser } from '@/store/user/userSlice.js';

export default function Login() {
  const BackgroundDiv = styled('section')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const changeUser = (data: User) => {
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

  const onChangeLogin = (e: { target: { value: SetStateAction<string> } }) => {
    setLogin(e.target.value);
  };

  const onChangePassword = (e: { target: { value: SetStateAction<string> } }) => {
    setPassword(e.target.value);
  };

  return (
    <BackgroundDiv>
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
    </BackgroundDiv>
  );
}
