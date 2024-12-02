import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Formdata from "./components/pages/FormData";
import Userview from "./components/pages/Userview";
import Header from "./components/routers/Header";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { path: "/", element: <Userview /> },
        { path: "/form", element: <Formdata /> },
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
