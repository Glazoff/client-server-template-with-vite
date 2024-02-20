import Layout from "@/components/Layout/Layout";
import path from "./constants";
import { loaderProfileData, loaderProfileSignIn } from "@/shared/loadersApi/loaderProfile";
import NotFoundPage from "@/pages/404";
import ErrorPage from "@/pages/500";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import Forum from "@/pages/Forum";
import AddingTopicPage from "@/widgets/ForumAddingTopic";
import TopicPage from '../../widgets/ForumTopicPage';
import MainGame from '../../widgets/MainGamePage/MainGame';
import GameOver from '../../widgets/GameOver';
import GameContent from '../../widgets/MainGamePage/GameContent';
import GameMainPage from "@/pages/Game";
import LiderBoard from "@/pages/LiderBoard";
import Profile from "@/pages/Profile";
import FormMainContent from "@/widgets/ProfileContentPage/FormMainContent";
import ProfileChangePassword from "@/widgets/ProfileContentPage/FormChangePassword";
import Main from "@/pages/Main";

export const routesSsr = [
  {
    path: path.Main,
    Component: Layout,
    //todo как появится авторизация в приложении, убрать из loader loaderProfileSignIn
    loader: loaderProfileSignIn,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: path['500'],
        Component: ErrorPage,
      },
      {
        path: path.Login,
        Component: Login,
      },
      {
        path: path.Registration,
        Component: Registration,
      },
      {
        path: path.Forum,
        Component: Forum,
      },
      {
        path: path.AddTopicPage,
        Component: AddingTopicPage,
      },
      {
        path: path.TopicPageId,
        Component: TopicPage,
      },
      {
        path: path.Game,
        Component: GameMainPage,
        children: [
          {
            path: path.Game,
            element: <MainGame />,
          },
          {
            path: path.GameStart,
            element: <GameContent />,
          },
          {
            path: path.GameOver,
            element: <GameOver />,
          },
        ],
      },
      {
        path: path.LiderBoard,
        Component: LiderBoard,
      },
      {
        path: path.Profile,
        loader: loaderProfileData,
        Component: Profile,
        children: [
          {
            path: path.Profile,
            element: <FormMainContent />,
          },
          { path: path.ProfileChangePassword, element: <ProfileChangePassword /> },
        ],
      },
      {
        path: path.Main,
        Component: Main,
      },
    ],
  },
];
