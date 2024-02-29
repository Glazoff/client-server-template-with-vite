import path from './constants';
import Layout from '../../components/Layout/Layout';
import NotFoundPage from '../../pages/404';
import ErrorPage from '../../pages/500';
import Forum from '../../pages/Forum';
import GameMainPage from '../../pages/Game';
import LiderBoard from '../../pages/LiderBoard';
import Login from '../../pages/Login';
import Main from '../../pages/Main';
import Profile from '../../pages/Profile';
import Registration from '../../pages/Registration';
import { loaderProfileData, loaderProfileSignIn } from '../../shared/loadersApi/loaderProfile';
import AddingTopicPage from '../../widgets/ForumAddingTopic';
import TopicPage from '../../widgets/ForumTopicPage';
import GameOver from '../../widgets/GameOver';
import GameContent from '../../widgets/MainGamePage/GameContent';
import MainGame from '../../widgets/MainGamePage/MainGame';
import ProfileChangePassword from '../../widgets/ProfileContentPage/FormChangePassword';
import FormMainContent from '../../widgets/ProfileContentPage/FormMainContent';

const routes = [
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

export default routes;
