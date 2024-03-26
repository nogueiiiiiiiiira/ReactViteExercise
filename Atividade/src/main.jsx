import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import { Tecnologies } from './Tecnologies.jsx';
import { Media } from  './Media.jsx';
import { Contacts } from './Contacts.jsx';
import { RickyAndMortyAPI } from './RickyAndMortyAPI.jsx'

import './index.css'

const router = createBrowserRouter([

  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/tec",
    element:  <Tecnologies />,
  },
  {
    path: "/media",
    element:  <Media />,
  },
  {
    path: "/contact",
    element:  <Contacts />,
  },
  {
    path: "/rickyAndMortyAPI",
    element:  <RickyAndMortyAPI />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)