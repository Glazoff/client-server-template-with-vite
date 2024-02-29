import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter([
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
            loader: loaderProfileData,
            element: <GameOver />,
          },
        ],
      },
      {
        path: path.LiderBoard,
        Component: LiderBoard,
        loader: loaderProfileData,
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
