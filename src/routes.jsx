import { createBrowserRouter } from "react-router-dom";

import LoginV1 from "./pages/login-v1/login";
import LoginV2 from "./pages/login-v2/login";
import LoginV3 from "./pages/login-v3/login";
import LoginV4 from "./pages/login-v4/login";

const router = createBrowserRouter([
  {
    path: "/loginv1",
    element: <LoginV1 />,
  },
  {
    path: "/loginv2",
    element: <LoginV2 />,
  },
  {
    path: "/loginv3",
    element: <LoginV3 />,
  },
  {
    path: "/",
    element: <LoginV4 />,
  },
]);

export default router;
