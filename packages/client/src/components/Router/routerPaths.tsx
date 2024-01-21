import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "../../pages/Login/Login";
import Registration from "../../pages/Registration/Registration";
import Forum from "../../pages/Forum";
import GameMainPage from "../../pages/Game";
import LiderBoard from "../../pages/LiderBoard/LiderBoard";
import NotFoundPage from "../../pages/404/404";
import Profile from "../../pages/Profile/Profile";
import Main from "../../pages/Main/Main";
import Layout from "../Layout/Layout";
import AddingTopicPage from "../../pages/Forum/AddingTopic";
import TopicPage from "../../pages/Forum/TopicPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "registration",
        Component: Registration,
      },
      {
        path: "forum",
        Component: Forum,
      },
      {
        path: "add-topic",
        Component: AddingTopicPage,
      },
      {
        path: "topic",
        Component: TopicPage,
      },
      {
        path: "game",
        Component: GameMainPage,
      },
      {
        path: "lider-board",
        Component: LiderBoard,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "",
        Component: Main,
      },
    ],
  },
]);

export default router
