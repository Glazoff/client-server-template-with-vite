import { useState, useEffect } from 'react';
import { OutletProps } from 'react-router-dom';
import { baseUrl } from '../loadersApi/loaderProfile';
import Login from '@/pages/Login';

type Props = OutletProps;

// eslint-disable-next-line react/display-name
const WithAuth = (WrapperComponent: React.ComponentType<Props>) => (props: Props) => {
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
    });
  }, []);

  return isAuth ? <WrapperComponent {...props} /> : <Login />;
};

export default WithAuth;
