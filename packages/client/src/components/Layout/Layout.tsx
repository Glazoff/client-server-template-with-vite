import { Link, Outlet, useNavigate } from 'react-router-dom';
import path from '../../App/Router/constants';
import { baseUrl } from '@/shared/constants/apiConstants';
import WithAuth from '@/shared/hoc/withAuth';

// TODO не забыть удалить
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

const OutletCheckAuth = WithAuth(Outlet);

function Layout() {
  const nav = useNavigate();

  return (
    <>
      <nav className="layout">
        <Link to={path.Login}>Login Page</Link>&nbsp;&nbsp;
        <Link to={path.Registration}>Registration Page</Link>&nbsp;&nbsp;
        <Link to={path.Forum}>Forum Page</Link>&nbsp;&nbsp;
        <Link to={path.Game}>Game Page</Link>&nbsp;&nbsp;
        <Link to={path.LiderBoard}>LiderBoard Page</Link>&nbsp;&nbsp;
        <Link to={path.Main}>Main Page</Link>&nbsp;&nbsp;
        <Link to={path.Profile}>Profile Page</Link>&nbsp;&nbsp;
        <button
          onClick={() => {
            logout();
            nav(path.Login);
          }}
        >
          кнопка для выхода из авторизации
        </button>
      </nav>
      <OutletCheckAuth />
    </>
  );
}

export default Layout;
