import {Link, Outlet} from 'react-router-dom'

function Layout () {
  return (
    <>
      <nav className="layout">
        <Link to="/login">Login Page</Link>&nbsp;&nbsp;
        <Link to="/registration">Registration Page</Link>&nbsp;&nbsp;
        <Link to="/forum">Forum Page</Link>&nbsp;&nbsp;
        <Link to="/game">Game Page</Link>&nbsp;&nbsp;
        <Link to="/lider-board">LiderBoard Page</Link>&nbsp;&nbsp;
        <Link to="/">Main Page</Link>&nbsp;&nbsp;
        <Link to="/profile">Profile Page</Link>&nbsp;&nbsp;
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
