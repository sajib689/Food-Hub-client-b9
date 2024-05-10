import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import Error from "../Components/Error";
import Login from "../Authorization/Login";
import Register from "../Authorization/Register";
import AddFood from "../Components/AddFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <Error/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/addFood",
            element: <AddFood/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        }
    ]
  },
]);

export default router;
