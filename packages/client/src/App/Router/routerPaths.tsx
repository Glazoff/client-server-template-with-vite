import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import Forum from "../../pages/Forum";
import GameMainPage from "../../pages/Game";
import LiderBoard from "../../pages/LiderBoard";
import NotFoundPage from "../../pages/404";
import Profile from "../../pages/Profile";
import Main from "../../pages/Main";
import Layout from "../../components/Layout/Layout";
import AddingTopicPage from "../../widgets/ForumAddingTopic";
import TopicPage from "../../widgets/ForumTopicPage";

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
