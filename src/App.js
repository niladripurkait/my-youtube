import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import Demo from "./components/Demo";
import SearchVideos from "./components/SearchVideos";
import { lazy, Suspense } from "react";
import ErrorPage from "./components/ErrorPage";

const CategoryVideos = lazy(() => import("./components/CategoryVideos"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <SearchVideos />,
      },
      {
        path: "category",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full">
                Loading...
              </div>
            }
          >
            <CategoryVideos />
          </Suspense>
        ),
      },
      {
        path: "demo",
        element: <Demo />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
