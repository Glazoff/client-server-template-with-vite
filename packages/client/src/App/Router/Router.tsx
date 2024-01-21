import { RouterProvider } from "react-router-dom"
import router from "./routerPaths"

// провайдер и так вокруг всего нашего приложения, остальные обертки можно будет прописать в main.tsx

function Router () {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
