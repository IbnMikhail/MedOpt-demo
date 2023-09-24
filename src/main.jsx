import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import ErrorPage from './assets/pages/ErrorPage.jsx';
import SignUp from './assets/pages/SignUp.jsx';
import SignIn from './assets/pages/SignIn.jsx';
import DisplayPage from './assets/pages/DisplayPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
     children: [
     {
        path: "SignUp/:SignUpId",
        element: <SignUp />,
      },
      {
        path: "SignIn/:SignInId",
        element: <SignIn />,
      },
      {
        path: "DisplayPage/:DisplayPageId",
        element: <DisplayPage />,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
