import { createBrowserRouter } from "react-router";
import App from "../layouts/App";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/details/form/ActivityForm";
import ActivityDetail from "../../features/activities/details/ActivityDetail";
import HomePage from "../../features/home/HomePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {path:'', element: <HomePage/>},
            {path:'activities', element: <ActivityDashboard/>},
            {path:'createActivity', element:<ActivityForm key='create'/>},
            {path:'activities/:id', element:<ActivityDetail/>},
            {path:'manage/:id', element:<ActivityForm/>}
        ]
    }
])