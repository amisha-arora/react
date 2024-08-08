import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Vehicle from './assets/components/vehicle';
import './index.css';
import Energy from './assets/components/Energy';
import Charging from './assets/components/charging';
import Discover from './assets/Discover';
import Shop from './assets/shop';
import Question from './assets/Question';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      {
        path: "vehicles",
        element: <Vehicle />,
      },
      {
        path: "Energy",
        element: <Energy />,
      },
      {
        path: "Charging",
        element: <Charging />,
      },
      {
        path: "Discover",
        element:<Discover/>
      },
      {
        path: "Shop",
        element:<Shop/>
      }
  
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
