import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
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
import BookedServices from "../pages/BookedServices";
import ServiceToDo from "../pages/ServiceToDo";
import Error from "../pages/Error";
import About from "../pages/About";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/allServices",
    element: <AllServices />,
  },
  {
    path: "/about",
    element: <About />,
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
        `https://revivie-rewire.vercel.app/api/services/service/${params.id}`
      ),
  },
  {
    path: "/services/created/:email",
    element: (
      <PrivateRoute>
        <ManageService />
      </PrivateRoute>
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
        `https://revivie-rewire.vercel.app/api/services/service/${params.id}`
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
        `https://revivie-rewire.vercel.app/api/services/service/${params.id}`
      ),
  },
  {
    path: "/booked/user/:email",
    element: (
      <PrivateRoute>
        <BookedServices />
      </PrivateRoute>
    ),
  },
  {
    path: "/booked/serviceToDo/:email",
    element: (
      <PrivateRoute>
        <ServiceToDo />
      </PrivateRoute>
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
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
