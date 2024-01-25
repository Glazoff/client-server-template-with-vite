import { createBrowserRouter } from 'react-router-dom';
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
    path: '/',
    Component: Layout,
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
        Component: ForumAddTopicMain,
      },
      {
        path: 'topic/:id',
        Component: ForumTopicPage,
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
        path: 'profile',
        Component: Profile,
      },
      {
        path: '',
        Component: Main,
      },
    ],
  },
]);

export default router;
