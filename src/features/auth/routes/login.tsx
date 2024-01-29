import React from "react";

import { Head } from "@/components/Head/Head";
import { Button } from "@/components/Elements/Button";
import { Content } from "@/components/Layout/Content";
import { Container } from "@/components/Layout/Container";




export const LoginPage: React.FC = () => {

  return (
    <Container display="flex" >
      <Head title="login" />
      <Content title="Front Chat App">
        <Button>Google Login</Button>
      </Content>
    </Container>
  );
}