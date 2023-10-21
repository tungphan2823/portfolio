import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import WorkPage from "./pages/Work";
import ContactPage from "./pages/Contact";
import NewsPage from "./pages/News";
const router = createHashRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/work",
        element: <WorkPage />,
      },
      
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ]
  }
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
