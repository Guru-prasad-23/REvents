import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import Services from "./screens/Services.jsx";
import AboutScreen from "./screens/AboutScreen.jsx";
import GalleryScreen from "./screens/GalleryScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/about" element={<AboutScreen/>}/>
      <Route path="/gallery" element={<GalleryScreen/>}/>
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
