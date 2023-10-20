import { createBrowserRouter, RouterProvider} from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import WorkPage from "./pages/Work";
import ContactPage from "./pages/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage/>,
    children: [{
      index: true,
      element: <HomePage />,
    },{
      path: "/work",
      element: <WorkPage/>,
    },{
      path: "/Contact",
      element: <ContactPage/>,
    }]
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
