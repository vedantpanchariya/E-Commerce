import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import {createBrowserRouter , RouterProvider} from "react-router"
import "../index.css"
import routes from "./routes"


const router = createBrowserRouter(routes)

const root = createRoot(document.getElementById("root"))
root.render(

  <StrictMode>
    
    <RouterProvider router = {router} />

  </StrictMode>
)
