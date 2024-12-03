import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Formdata from "./components/pages/FormData";
import Header from "./components/routers/Header";
import Userlist from "./components/routers/Userlist";
import Update from "./components/routers/Update";


function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { path: "/", element: <Userlist /> },
        { path: "/form", element: <Formdata />},
        {path:'update',element:<Update/>}
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <Header />
    </RouterProvider>
  );
}

export default App;
