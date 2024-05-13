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
import PrivateRoute from './PrivateRoute';
import PrivacyPolicy from "../Components/PrivacyPolicy";

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
            element: <PrivateRoute><AddFood/></PrivateRoute>
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
            element: <PrivateRoute><ManageFoods/></PrivateRoute>
        },
        {
            path: "/updateFood/:id",
            element: <PrivateRoute><UpdateFood/></PrivateRoute>,
            loader: ({params}) =>  fetch(`http://localhost:3000/foods/${params.id}`)
        },
        {
            path: "/foodDetails/:id",
            element: <PrivateRoute><FoodDetails/></PrivateRoute>,
            loader: ({params}) =>  fetch(`http://localhost:3000/foods/${params.id}`)
        },
        {
            path: "/foodrequest",
            element: <PrivateRoute><FoodRequest/></PrivateRoute>
        },
        {
            path: "/allfood",
            element: <AvailableFood/>
        },
        {
            path: "/terms",
            element: <PrivacyPolicy/>
        },
        {
            path: "/termsandservice",
            element: <PrivacyPolicy/>
        },
    ]
  },
]);

export default router;
