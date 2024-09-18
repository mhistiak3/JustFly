import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import CreateTrip from "./pages/CreateTrip.jsx";
import ViewTrip from "./pages/ViewTrip.jsx";
import AllTrip from "./pages/components/AllTrip";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="create-trip" element={<CreateTrip />} />
      <Route path="view-trip/:tripId" element={<ViewTrip />} />
      <Route path="all-trip" element={<AllTrip />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
     

  </StrictMode>
);
