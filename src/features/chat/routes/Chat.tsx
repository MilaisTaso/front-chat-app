import React from "react";

import { Header, HeaderProps } from "@/components/Header/Header";
import { Button } from "@/components/Elements/Button";
import { logOut } from "@/lib/firebase/auth";
import { ProtectedLayout } from "@/components/Layout/ProtectedLayout";


export const ChatPage:React.FC = () => {
  return (
    <ProtectedLayout className="text-heading1">
      Chat Page
    </ProtectedLayout>
  )
}