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
import AddingTopicPage from '../../widgets/ForumAddingTopic';
import TopicPage from '../../widgets/ForumTopicPage';
import { loaderProfileData, loaderProfileSignIn } from '@/shared/loadersApi/loaderProfile';
import ProfileChangePassword from '@/widgets/ProfileContentPage/FormChangePassword';
import ProfileContentPage from '@/widgets/ProfileContentPage';
import FormMainContent from '@/widgets/ProfileContentPage/FormMainContent';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    loader: loaderProfileSignIn,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'registration',
        Component: Registration,
      },
      {
        path: 'forum',
        Component: Forum,
      },
      {
        path: 'add-topic',
        Component: AddingTopicPage,
      },
      {
        path: 'topic',
        Component: TopicPage,
      },
      {
        path: 'game',
        Component: GameMainPage,
      },
      {
        path: 'lider-board',
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
        path: '',
        Component: Main,
      },
    ],
  },
]);

export default router;
