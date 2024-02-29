import { RouterProvider } from 'react-router-dom';
import router from './routerPaths';

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
