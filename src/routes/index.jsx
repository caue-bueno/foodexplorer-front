import { BrowserRouter } from "react-router-dom";

import { Page } from "../pages/Page";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
     { user ? <Page /> : <AuthRoutes />} 
    </BrowserRouter>
  )
}