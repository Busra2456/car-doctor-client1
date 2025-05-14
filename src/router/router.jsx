import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checout from "../Pages/checkout/Checout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./Routers/PrivateRoute";
import BookService from "../Pages/Bookings/BookService";

const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                  path:'/',
                  element:<Home></Home>
            },
            {
              path:'/Login',
              element:<Login></Login>
            },
            {
              path:'/SignUp',
              element:<SignUp></SignUp>
            },
            {path:'book/:id',
              element:<PrivateRoute><BookService></BookService></PrivateRoute>,
              loader:({params}) => fetch(`https://car-doctor-server-topaz-one.vercel.app/services/${params.id}`)
            },
            {
              path:'checkout/:id',
              element:<PrivateRoute><Checout></Checout></PrivateRoute>,
              loader: ({params}) => fetch(`http://localhost:13000/server/${params.id}`)
            },
            {
              path:'/bookings',
              element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
      },
    ]);

    export default router;