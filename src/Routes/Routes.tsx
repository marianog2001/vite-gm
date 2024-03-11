import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import { LandingPage } from '../Pages/LandingPage/LandingPage';
import { AboutUs } from '../Pages/AboutUs/AboutUs'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LandingPage />
            },
            {
                path: '/About',
                element: <AboutUs />
            }
        ]
    }
])