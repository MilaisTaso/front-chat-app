import { RouterProvider } from "react-router-dom";
import { useAtom } from "jotai";

import { publicRouter } from "./public";
import { protectedRouter } from "./protected";
import { customerAtom } from "@/features/auth/state/auth";


export const AppRoutes = () => {
  const [customer] = useAtom(customerAtom);

  const router = customer? protectedRouter : publicRouter;

  return (
    <RouterProvider router={router} />
  )
}