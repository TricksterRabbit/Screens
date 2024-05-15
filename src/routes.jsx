import { createBrowserRouter } from "react-router-dom";

import LoginV1 from "./pages/login-v1/login";
import LoginV2 from "./pages/login-v2/login";

const router = createBrowserRouter([
  {
    path: "/loginv1",
    element: <LoginV1 />,
  },
  {
    path: "/",
    element: <LoginV2 />,
  },
]);

export default router;
