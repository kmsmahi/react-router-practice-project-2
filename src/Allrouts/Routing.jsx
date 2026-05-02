import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import Root from "../Pages/Root";
import Products from "../Pages/Products";
import Wishlist from "../Pages/Wishlist";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            index:true,
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/products',
            element:<Products></Products>,
        },
        {
            path:'/lists',
            element:<Wishlist></Wishlist>,
        },
    ]
  },
]);