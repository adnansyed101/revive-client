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
import ManageService from "../pages/ManageService";
import UpdateService from "../pages/UpdateService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/allServices",
    element: <AllServices />,
  },
  {
    path: "/services/service/:id",
    element: (
      <PrivateRoute>
        <ServiceDetail />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      axios.get(
        `${import.meta.env.VITE_SERVERURL}/api/services/service/${params.id}`
      ),
  },
  {
    path: "/services/created/:email",
    element: (
      <PrivateRoute>
        <ManageService />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      axios.get(
        `${import.meta.env.VITE_SERVERURL}/api/services/created/${params.email}`
      ),
  },
  {
    path: "/services/update/:id",
    element: (
      <PrivateRoute>
        <UpdateService />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      axios.get(
        `${import.meta.env.VITE_SERVERURL}/api/services/service/${params.id}`
      ),
  },
  {
    path: "/services/booking/:id",
    element: (
      <PrivateRoute>
        <BookingPage />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      axios.get(
        `${import.meta.env.VITE_SERVERURL}/api/services/service/${params.id}`
      ),
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
