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
import About from './../Components/About';
import DonarRequest from "../Components/DonarRequest";

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
            loader: ({params}) =>  fetch(`https://assignment-eleven-servertwo.vercel.app/foods/${params.id}`,{
                credentials: 'include'
            })
        },
        {
            path: "/foodDetails/:id",
            element: <PrivateRoute><FoodDetails/></PrivateRoute>,
            loader: ({params}) =>  fetch(`https://assignment-eleven-servertwo.vercel.app/foods/${params.id}`,{
                credentials: 'include'
            })
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
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/foodrequestdonar",
            element: <DonarRequest/>
        },
    ]
  },
]);

export default router;
