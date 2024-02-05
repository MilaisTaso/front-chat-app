import React from "react";

import { Header, HeaderProps } from "@/components/Header/Header";
import { Button } from "@/components/Elements/Button";
import { logOut } from "@/lib/firebase/auth";

const headerItems: HeaderProps = {
  navLinks: {
    links: [
      {
        to: '/',
        className: 'text-red',
        children: 'Top'
      },
    ],
    className: 'bg-blue',
  },
  headTitle: 'Chat'
}

export const ChatPage:React.FC = () => {
  return (
    <div>
      <Header {...headerItems}>
        <Button onClick={logOut}>
          LogOut
        </Button>
        <div>Chat Page</div>
      </Header>
    </div>
  )
}