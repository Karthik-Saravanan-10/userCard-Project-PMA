import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Formdata from "./components/pages/FormData";
import Header from "./components/routers/Header";
import Userlist from "./components/routers/Userlist";
// import { sendtoData } from "./components/pages/FormData";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { path: "/", element: <Userlist /> },
        { path: "/form", element: <Formdata />},
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
