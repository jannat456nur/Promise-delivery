

import { createBrowserRouter } from "react-router-dom";
import DashboardBody from "../pages/DashboardBody";
import UserLayout from "../layouts/UserLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
// import ProtectedRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <DashboardBody />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/registration',
                element: <Registration />,
            },
            
            // {
            //   path: '/admin',
            //   element: <PrivateRoute role="customer"><ProfileLayout /></PrivateRoute>,
            //   errorElement: <ErrorPage />,
            //   children: [
            //     {
            //       path: '/admin',
            //       element: <Orders />,
            //     },
            //   ],
            // },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ],
    },
]);