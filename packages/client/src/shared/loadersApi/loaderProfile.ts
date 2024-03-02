export const baseUrl = 'https://ya-praktikum.tech/api/v2';

export const loaderProfileSignIn = async () => {
  const login = 'Wolf1080';
  const password = 'Qwerty12345';
  //TODO: После сделать redux и оформить все через него. Хранить данные тоже там.
  const data = await fetch(`${baseUrl}/auth/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login, password }),
  });
  return data;
};

export const loaderProfileData = async () => {
  const data = await fetch(`${baseUrl}/auth/user`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return data;
};
