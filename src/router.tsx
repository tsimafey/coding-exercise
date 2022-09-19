import React from 'react';

import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import Continents from "./pages/Continents";
import Validation from "./pages/Validation";

export const ROUTES = {
  CONTINENTS: '/continents',
  VALIDATION: '/validation'
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={ROUTES.CONTINENTS} />,
  },
  {
    path: ROUTES.CONTINENTS,
    element: <Continents />,
  },
  {
    path: ROUTES.VALIDATION,
    element: <Validation />,
  },
]);

export default router;