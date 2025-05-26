import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import BMI from "../pages/BMI";
import toast from "react-hot-toast";
import { Navigate } from "react-router";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function ProtectBmi(props) {
  let user = JSON.parse(localStorage.getItem("User-Account"));
  if (!user) {
    toast.error("You have To login");
    return <Navigate to={"/"} />;
  }
  return props.children;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/signin", element: <SignIn /> },
      {
        path: "/bmi",
        element: (
          <ProtectBmi>
            <BMI />
          </ProtectBmi>
        ),
      },
    ],
  },
]);
const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
