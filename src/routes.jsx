import { createBrowserRouter } from "react-router-dom";

import LoginV1 from "./pages/login-v1/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginV1 />,
  },
]);

export default router;
