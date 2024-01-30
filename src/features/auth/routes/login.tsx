import React from 'react';

import { Head } from '@/components/Head/Head';
import { Button } from '@/components/Elements/Button';
import { Content } from '@/components/Layout/Content';
import { Container } from '@/components/Layout/Container';
import { useSignIn } from '../api/auth';

export const LoginPage: React.FC = () => {
  const { mutate: signIn, isPending, isError, error } = useSignIn();

  const handleSignInClick = () => {
    signIn(undefined);
  };

  return (
    <>
      <Head title="login" />
      <Container display="flex" className="min-h-screen ">
        <Content title="Front Chat App">
          <Button onClick={handleSignInClick} isLoading={isPending}>
            Google Login
          </Button>
        </Content>
        <img src='' />
      </Container>
    </>
  );
};
