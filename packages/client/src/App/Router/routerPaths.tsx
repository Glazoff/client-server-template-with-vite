import { createBrowserRouter } from 'react-router-dom';
import path from './constants';
import Layout from '../../components/Layout/Layout';
import NotFoundPage from '../../pages/404';
import Forum from '../../pages/Forum';
import GameMainPage from '../../pages/Game';
import LiderBoard from '../../pages/LiderBoard';
import Login from '../../pages/Login';
import Main from '../../pages/Main';
import Profile from '../../pages/Profile';
import Registration from '../../pages/Registration';
import ForumAddTopicMain from '../../widgets/ForumAddingTopic';
import ForumTopicPage from '../../widgets/ForumTopicPage';

const router = createBrowserRouter([
  {
    path: path.Main,
    Component: Layout,
    errorElement: <NotFoundPage />,
    children: [
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
        Component: ForumAddTopicMain,
      },
      {
        path: path.AddTopicPageId,
        Component: ForumTopicPage,
      },
      {
        path: path.Game,
        Component: GameMainPage,
      },
      {
        path: path.LiderBoard,
        Component: LiderBoard,
      },
      {
        path: path.Profile,
        Component: Profile,
      },
      {
        path: path.Main,
        Component: Main,
      },
    ],
  },
]);

export default router;
