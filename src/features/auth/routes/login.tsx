import React from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { Head } from '@/components/Head/Head';
import { Button } from '@/components/Elements/Button';
import { Content } from '@/components/Layout/Content';
import { Container } from '@/components/Layout/Container';
import Hero from '@/assets/hero.png';
import { useSignIn } from '../api/auth';

export const LoginPage: React.FC = () => {
  const mutation = useSignIn();
  const { showBoundary } = useErrorBoundary();

  const handleSignIn = async () => {
    await mutation.mutate(undefined);

    if (mutation.isError) {
      showBoundary(mutation.error);
    }
  };

  return (
    <>
      <Head title="login" />
      <Container display="flex" className="min-h-screen">
        <Content title="Front Chat App">
          <Button onClick={handleSignIn} isLoading={mutation.isPending}>
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
