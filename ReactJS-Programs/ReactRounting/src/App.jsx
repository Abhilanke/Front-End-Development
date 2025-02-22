import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contect from "./Contect";
import Navbar from "./Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar></Navbar> <Home></Home>
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        <Navbar></Navbar> <About></About>
      </>
    ),
  },
  {
    path: "/Contect",
    element: (
      <>
        <Navbar></Navbar> <Contect></Contect>
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
