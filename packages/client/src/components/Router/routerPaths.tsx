import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Forum from "../Forum";
import Game from "../Game";
import LiderBoard from "../LiderBoard/LiderBoard";
import NotFoundPage from "../404/404";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Layout from "../Layout/Layout";
import AddingTopicPage from "../Forum/AddingTopic";
import TopicPage from "../Forum/TopicPage";

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
        Component: Game,
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
