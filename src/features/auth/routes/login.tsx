import React from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { Head } from '@/components/Head/Head';
import { Button } from '@/components/Elements/Button';
import { Content } from '@/components/Layout/Content';
import { Container } from '@/components/Layout/Container';
import { useSignIn } from '../api/auth';
import Hero from '@/assets/hero.png';

export const LoginPage: React.FC = () => {
  const { showBoundary } = useErrorBoundary();
  const {
    mutate: signIn,
    isPending,
    isError,
    error,
  } = useSignIn({
    config: {
      onError: (authError) => {
        showBoundary(authError)
        alert(authError.message);
      },
    },
  });

  const handleSignInClick = () => {
    signIn(undefined);
  };

  return (
    <>
      <Head title="login" />
      <Container display="flex" className="min-h-screen">
        <Content title="Front Chat App">
          <Button onClick={handleSignInClick} isLoading={isPending}>
            Google Login
          </Button>
        </Content>
        <div>
          <img src={Hero} alt="hero" className="" />
        </div>
      </Container>
    </>
  );
};
