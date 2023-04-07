import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ErrorPage from "./pages/ErrorPage";
import FinalPage from "./pages/FinalPage";
import CompanyInfo from "./pages/CompanyInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/final",
    element: <FinalPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/companyInfo",
    element: <CompanyInfo />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

//
