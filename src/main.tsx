import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import React from "react";

const rootElement = document.getElementById('root');
const root = rootElement ? createRoot(rootElement) : null;

if (root) {
    root.render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
} else {
    throw new Error('root element was not found in the document')
}