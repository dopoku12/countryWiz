import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import './stylesheet/index.css';
import App from './App';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    action:
      async ({ request }) => {
        console.log(request)
        const data = await request.fromData()
        const submission = {
          country: data.get('country')
        }
        console.log(submission);
        return submission
      }
    ,
    errorElement: <ErrorPage />
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

);

