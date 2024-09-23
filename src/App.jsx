import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { Layout } from "./layout/Layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CartPage from "./pages/CartPage/CartPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: '/cart',
        element: <CartPage />
      }, {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
]);


function App() {
  return (<>
  <Provider store={store}>
   <RouterProvider router={router} />
   </Provider>
  </>)
}

export default App;
