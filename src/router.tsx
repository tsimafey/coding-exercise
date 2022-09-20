import React from 'react';
import {
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';

import { ROUTES } from 'constants/routes';

import { Continents } from './pages/Continents';
import { Validation } from './pages/Validation';

export const router = createBrowserRouter([
  {
    path: '/',
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
