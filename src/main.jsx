import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blog from './components/Blog/Blog'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Statistics from './components/Statistics/Statistics'
import Home from './components/Home/Home'
import Banner from './components/Banner/Banner'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path: '/',
      element: <Banner></Banner>     
     },
      {
        path: 'blog',
        element: <Blog></Blog>,
      },
      {
        path:'appliedjob',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>,
)
