import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import WorkPage from "./pages/Work";
import { AnimatePresence } from "framer-motion";
import ContactPage from "./pages/Contact";
import NewsPage from "./pages/News";
import ProductDetailPage from "./pages/ProductDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "work",
        element: <WorkPage />,
        children: [],
      },
      {
        path: "work/:productId",
        element: <ProductDetailPage />,
      },

      {
        path: "blog",
        element: <NewsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);
function App() {
  return (
    <AnimatePresence>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </AnimatePresence>
  );
}

export default App;
