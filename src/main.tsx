import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/Routes"
import React from "react"

const container = document.getElementById('root')

const root = createRoot(container)
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

