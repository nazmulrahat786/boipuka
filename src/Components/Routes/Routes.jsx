import React from 'react';

import {
  createBrowserRouter,

} from "react-router";
import Root from '../Pages/Root/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import About from '../About/About';
import BookDetails from '../BookDetails/BookDetails';
import ReadList from '../ReadList/ReadList';


export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <Error></Error>,
      children: [
        {index: true, 
          loader: () => fetch('booksData.json'), 
            path: '/',
            Component: Home
        },
        {
          path:'/about',
          Component: About
        },
        {
          path:'/readList',
          loader: () => fetch('booksData.json'), 
          Component:ReadList
        }
        ,
        {
          path:'bookDetails/:id',
          loader: () => fetch('/booksData.json'), 
          Component:BookDetails
        }
      ]
    },
   
  ]);