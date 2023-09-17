import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './routes/Home';
import Advent from './routes/Advent';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import LabMonitor from './routes/LabMonitor';

const router = createHashRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: 'advent',
    element: <Advent/>
  },
  {
    path: 'lab-monitor',
    element: <LabMonitor/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App font-mono flex bg-slate-100 dark:bg-zinc-800 h-max text-gray-800 dark:text-white">
      <div className="lg:w-1/2 w-5/6 mt-24 mx-auto">
        <RouterProvider router={router}/>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
