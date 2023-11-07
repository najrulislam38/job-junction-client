import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../Layout/Root";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyJobs from "../pages/MyJobs/MyJobs";
import BitRequest from "../pages/BitRequest/BitRequest";
import MyBid from "../pages/MyBid/MyBid";
import SingIn from "../pages/SignIn/SingIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../pages/JobDetails/JobDetails";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "add-job",
        element: (
          <PrivateRoute>
            <AddJobs></AddJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "my-post-job",
        element: (
          <PrivateRoute>
            <MyJobs></MyJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "my-bids",
        element: (
          <PrivateRoute>
            <MyBid></MyBid>
          </PrivateRoute>
        ),
      },
      {
        path: "bid-requests",
        element: (
          <PrivateRoute>
            <BitRequest></BitRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(
            `https://job-junction-server.vercel.app/jobs/${params.id}`
          ),
      },
      {
        path: "signIn",
        element: <SingIn></SingIn>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default MainRouter;
