import { createBrowserRouter, Navigate } from "react-router";
import App from "../layouts/App";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/details/form/ActivityForm";
import ActivityDetailsPage from "../../features/activities/details/ActivityDetailsPage";
import HomePage from "../../features/home/HomePage";
import Counter from "../../features/counter/Counter";
import TestErrors from "../../features/errors/TestErrors";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {path:'', element: <HomePage/>},
            {path:'activities', element: <ActivityDashboard/>},
            {path:'createActivity', element:<ActivityForm key='create'/>},
            {path:'activities/:id', element:<ActivityDetailsPage/>},
            {path:'manage/:id', element:<ActivityForm/>},
            {path:'counter', element:<Counter/>},
            {path:'errors', element:<TestErrors/>},
            {path:'not-found', element:<NotFound/>},
            {path:'server-error', element:<ServerError/>},
            {path:'*', element:<Navigate replace to='/not-found'/>}
        ]
    }
])