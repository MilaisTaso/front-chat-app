import { createBrowserRouter } from "react-router-dom";

import { ContentLayout } from "@/components/Layout/Layout";
import { Button } from "@/components/Elements/Button";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContentLayout title="login"><Button>Google Login</Button></ContentLayout>
  }
]);

export default router;