import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import Inicial from './pages/Inicial';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavbarComponents from './components/NavbarComponents';
import Cadastro from './pages/cadastro';
import Sobre from './pages/sobre';
import Login from './pages/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicial/>,
  },
  {
    path: "/cadastro",
    element: <Cadastro/>,
  },
  {
    path: "/sobre",
    element: <Sobre/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComponents/>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
