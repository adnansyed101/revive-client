import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import CreateServices from "../pages/CreateServices";
import PrivateRoute from "./PrivateRoutes";
import AllServices from "../pages/AllServices";
import ServiceDetail from "../pages/ServiceDetail";
import axios from "axios";
import BookingPage from "../pages/BookingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/services",
    element: <AllServices />,
  },
  {
    path: "/service/:id",
    element: (
      <PrivateRoute>
        <ServiceDetail />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      axios.get(`${import.meta.env.VITE_SERVERURL}/api/service/${params.id}`),
  },
  {
    path: "/service/booking/:id",
    element: (
      <PrivateRoute>
        <BookingPage />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      axios.get(`${import.meta.env.VITE_SERVERURL}/api/service/${params.id}`),
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
        <CreateServices />
      </PrivateRoute>
    ),
  },
]);

export default router;
