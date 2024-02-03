import { useState, useEffect } from "react";

const withAuth = (Component) => (props) => {
const [isAuth, setAuth] = useState(false);

useEffect(() => {
    fetch('auth/user')
      .then(res => {
        if(res.code === 200) {
            setAuth(true);
        }
      })
      .catch(() => {
        if(res.code === 401) {
            setAuth(false)
        }
      });
}, []);
        
return (
    <>
        {isAuth ? <Component {...props} /> : <Login />}
    </>
);
}

export default withAuth;
