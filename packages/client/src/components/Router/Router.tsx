import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Forum from "../Forum/Forum";
import Game from "../Game/Game";
import LiderBoard from "../LiderBoard/LiderBoard";
import NotFoundPage from "../404/404";
import Profile from "../../Profile/Profile";
import Main from "../Main/Main";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="forum" element={<Forum />} />
      <Route path="game" element={<Game />} />
      <Route path="lider-board" element={<LiderBoard />} />
      <Route path="profile" element={<Profile />} />
      <Route index path="" element={<Main />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);


// этот компонент в последсвии удалится
// страница топика форума будет по айди скорее всего
function Layout () {
  return (
    <>
      <nav>
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

function Router () {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
