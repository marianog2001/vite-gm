import { createBrowserRouter } from "react-router-dom";
import App from '../App.tsx';
import LandingPage from '../Pages/LandingPage/LandingPage.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'LandingPage', element: <LandingPage /> }
        ]
    }
])