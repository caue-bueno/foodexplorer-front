import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { Page } from "../pages/Page";
// import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  )
}