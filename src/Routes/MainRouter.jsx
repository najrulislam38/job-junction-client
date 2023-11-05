import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../Layout/Root";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyJobs from "../pages/MyJobs/MyJobs";
import BitRequest from "../pages/BitRequest/BitRequest";
import MyBid from "../pages/MyBid/MyBid";
import SingIn from "../pages/SignIn/SingIn";
import SignUp from "../pages/SignUp/SignUp";

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
        element: <AddJobs></AddJobs>,
      },
      {
        path: "my-post-job",
        element: <MyJobs></MyJobs>,
      },
      {
        path: "my-bids",
        element: <MyBid></MyBid>,
      },
      {
        path: "bid-requests",
        element: <BitRequest></BitRequest>,
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
