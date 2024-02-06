import { useState, useEffect } from 'react';
import { baseUrl } from '../loadersApi/loaderProfile';
import Login from '@/pages/Login';

// eslint-disable-next-line react/display-name
const WithAuth = (WrapperComponent) => (props) => {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    fetch(`${baseUrl}/auth/user`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) {
        setAuth(true);
      }
      if (res.status === 401) {
        setAuth(false);
      }
    });
  }, []);

  return <>{isAuth ? <WrapperComponent {...props} /> : <Login />}</>;
};

export default WithAuth;
