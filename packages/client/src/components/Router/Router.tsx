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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="forum" element={<Forum />} />
      <Route path="game" element={<Game />} />
      <Route path="lider-board" element={<LiderBoard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);


// этот компонент в последсвии удалится
function Layout () {
  return (
    <>
      <nav>
        <Link to="/">Login</Link>&nbsp;&nbsp;
        <Link to="/registration">Registration</Link>&nbsp;&nbsp;
        <Link to="/forum">Forum</Link>&nbsp;&nbsp;
        <Link to="/game">Game</Link>&nbsp;&nbsp;
        <Link to="/lider-board">LiderBoard</Link>&nbsp;&nbsp;
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
