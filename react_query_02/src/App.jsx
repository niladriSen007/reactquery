import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import RQSuperheroes from "./pages/RQSuperheroes";
import Superheroes from "./pages/Superheroes";
import Navbar from "./components/Navbar";

const App = () => {
  const Layout = () => (
    <div>
      <Navbar />
      <div style={{ flex: "4" }}>
        <Outlet />
      </div>
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/rqsuperheroes",
          element: <RQSuperheroes />,
        },
        {
          path: "/superheroes",
          element: <Superheroes />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
