import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Head } from '@/components/Head/Head';
import { Button } from '@/components/Elements/Button';
import { Content } from '@/components/Layout/Content';
import { Container } from '@/components/Layout/Container';
import { signIn } from '@/lib/firebase/auth';
import Hero from '@/assets/hero.png';

export const LoginPage: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoding] = useState<boolean>(false);

  const signInProcess = async () => {
    try {
      setLoding(true);
      await signIn();
      setError(null);
      setLoding(false);
    } catch (err) {
      console.log('error!!!')
      setError(error as Error);
      setLoding(false);
      throw err;
    }
  };

  const handleSignInClick = () => {
    signInProcess().catch(() => {});
  };

  if (error) {
    throw error;
  }

  return (
    <>
      <Head title="login" />
      <ErrorBoundary fallback={<div>Error</div>}>
        <Container display="flex" className="min-h-screen">
          <Content title="Front Chat App">
            <Button onClick={handleSignInClick} isLoading={loading}>
              Google Login
            </Button>
          </Content>
          <div>
            <img src={Hero} alt="hero" className="" />
          </div>
        </Container>
      </ErrorBoundary>
    </>
  );
};
