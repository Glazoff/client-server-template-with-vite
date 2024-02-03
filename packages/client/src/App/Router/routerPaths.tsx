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
import { withAuth } from '../../shared/hoc/withAuth';
import AddingTopicPage from '../../widgets/ForumAddingTopic';
import TopicPage from '../../widgets/ForumTopicPage';
import { loaderProfileData, loaderProfileSignIn } from '@/shared/loadersApi/loaderProfile';
import ProfileChangePassword from '@/widgets/ProfileContentPage/FormChangePassword';
import FormMainContent from '@/widgets/ProfileContentPage/FormMainContent';

const router = createBrowserRouter([
  {
    path: path.Main,
    Component: Layout,
    loader: loaderProfileSignIn,
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
        Component: <withAuth>Forum</withAuth>,
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
]);

export default router;
