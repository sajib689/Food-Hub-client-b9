import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import Error from "../Components/Error";
import Login from "../Authorization/Login";
import Register from "../Authorization/Register";
import AddFood from "../Components/AddFood";
import ManageFoods from "../Components/ManageFoods";
import UpdateFood from "../Components/UpdateFood";
import FoodDetails from "../Components/FoodDetails";
import FoodRequest from "../Components/FoodRequest";
import AvailableFood from "../Components/AvailableFood";

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
        },
        {
            path: "/manageFood",
            element: <ManageFoods/>
        },
        {
            path: "/updateFood/:id",
            element: <UpdateFood/>,
            loader: ({params}) =>  fetch(`http://localhost:3000/foods/${params.id}`)
        },
        {
            path: "/foodDetails/:id",
            element: <FoodDetails/>,
            loader: ({params}) =>  fetch(`http://localhost:3000/foods/${params.id}`)
        },
        {
            path: "/foodrequest",
            element: <FoodRequest/>
        },
        {
            path: "/allfood",
            element: <AvailableFood/>
        },
    ]
  },
]);

export default router;
