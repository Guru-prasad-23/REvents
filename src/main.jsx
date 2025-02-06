import React, { useState, useEffect } from "react";
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
import ServicesScreen from "./screens/ServicesScreen.jsx";
import AboutScreen from "./screens/AboutScreen.jsx";
import GalleryScreen from "./screens/GalleryScreen.jsx";
import Loader from "./components/Loader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/services" element={<ServicesScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/gallery" element={<GalleryScreen />} />
    </Route>
  )
);

const RootComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? <Loader /> : <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>
);
