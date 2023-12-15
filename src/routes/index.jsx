/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter } from "react-router-dom";

import { Page } from "../pages/Page";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { useEffect } from "react";
import { api } from "../services/api";

export function Routes() {
  const { user, signOut } = useAuth();

  // useEffect(() => {
  //   api.get('/users/validated').catch((error) => {
  //     if (error.response?.status === 401) {
  //       // console.log(user)
  //       signOut();
  //     }
  //   })
  // }, []);

  return (
    <BrowserRouter>
      {user ? <Page /> : <AuthRoutes />}
    </BrowserRouter>
  )
}