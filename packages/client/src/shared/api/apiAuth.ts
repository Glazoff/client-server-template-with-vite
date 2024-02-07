export const baseUrl = 'https://ya-praktikum.tech/api/v2';

type SignIn = {
  login: string;
  password: string;
};

type SignUp = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export const signIn = async ({ login, password }: SignIn) => {
  const data = await fetch(`${baseUrl}/auth/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login, password }),
  });

  if (data.status !== 200) {
    console.error(`request /auth/signin failed error: ${data.status}`);
    return;
  }

  return data;
};

export const getUser = async () => {
  const data = await fetch(`${baseUrl}/auth/user`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (data.status === 200) {
    return data.json();
  } else {
    throw Error(`error /auth/user status - ${data.status}`);
  }
};

export const logout = async () => {
  const data = await fetch(`${baseUrl}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const signUp = async (userData: SignUp) => {
  const data = await fetch(`${baseUrl}/auth/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...userData }),
  });
  return data;
};
