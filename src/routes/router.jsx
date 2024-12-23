import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import CreateServices from "../pages/CreateServices";
import PrivateRoute from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/addService",
    element: (
      <PrivateRoute>
        <CreateServices />,
      </PrivateRoute>
    ),
  },
]);

export default router;
