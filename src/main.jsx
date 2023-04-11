import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Blog from './components/Blog/Blog'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Statistics from './components/Statistics/Statistics'
import Home from './components/Home/Home'
import Banner from './components/Banner/Banner'
import ErrorPage from './components/ErrorPage/ErrorPage'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
      element: <Banner></Banner>  , 
      loader: () => fetch ('jobfeature.json')
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
      },

    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>,
)
