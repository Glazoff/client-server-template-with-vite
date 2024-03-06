import React from 'react';
import { Button } from '@mui/material';
import { getOAuthClientId, loginOAuthYandex } from '@/shared/api/apiAuth';
import { baseClientUrl } from '@/shared/constants/apiConstants';

export default function OAuthButton() {
  const [clientId, setClientId] = React.useState<any>('');
  const [isLogged, setLogged] = React.useState(false);
  const REDIRECT_URI = baseClientUrl + '/login';

  const OAuthRedirect = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId.service_id}&redirect_uri=${REDIRECT_URI}`;

  React.useEffect(() => {
    getOAuthClientId(REDIRECT_URI).then((res) => {
      setClientId(res);
    });
  }, []);

  function handleOuthLogin() {
    const searchParams = new URLSearchParams(location.search);
    const codeParam = searchParams.get('code');
    if (codeParam) {
      loginOAuthYandex({
        code: codeParam,
        redirect_uri: REDIRECT_URI,
      }).then((res) => {
        console.log(res);
      });
    }
  }

  React.useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const codeParam = searchParams.get('code');
    if (codeParam) {
      setLogged(true);
    }
  });

  return (
    <>
      <Button
        component={'a'}
        href={OAuthRedirect}
        variant="hollow"
        onClick={() => {
          setLogged(true);
        }}
      >
        Войти через Яндекс
      </Button>
      {isLogged && (
        <Button
          variant="hollow"
          onClick={() => {
            handleOuthLogin();
          }}
        >
          Войти
        </Button>
      )}
    </>
  );
}
