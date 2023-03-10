import React from 'react';
import ReactDOM from 'react-dom/client';

import HomePage from './pages/HomePage';
import MovieList from './pages/MovieList';
import MovieForm from './components/MovieForm';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  children: [
    {
      index: true,
      element: <HomePage />
    },
    {
      path: "/MovieList",
      element: <MovieList />
    },
    {
      path: "/MovieForm",
      element: <MovieForm />
    },
    {
      path: "/NavBar",
      element: <NavBar />
    },
    {
      path: "/SearchBar",
      element: <SearchBar />
    },
  ]
}
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

