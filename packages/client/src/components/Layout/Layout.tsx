import {Link, Outlet} from 'react-router-dom'
import path from '../../App/Router/constants';

// здесь не поменял на кастомные линки, потому что этого компонента в финальной версии не будет

function Layout () {
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
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
