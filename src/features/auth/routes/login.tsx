import React, { useState } from 'react';
import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';
import { Head } from '@/components/Head/Head';
import { Button } from '@/components/Elements/Button';
import { Content } from '@/components/Layout/Content';
import { Container } from '@/components/Layout/Container';
import { signIn } from '@/lib/firebase/auth';
import Hero from '@/assets/hero.png';
import { Spinner } from '@/components/Elements/Spinner';

export const LoginPage: React.FC = () => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoding] = useState<boolean>(false);
  const { showBoundary } = useErrorBoundary();

  const signInProcess = async () => {
    try {
      setLoding(true);
      await signIn();
      setError(null);
    } catch (err) {
      console.log('error!!!');
      showBoundary(err as Error);
      setError(err as Error);
    } finally {
      setLoding(false);
    }
  };

  const handleSignInClick = () => {
    signInProcess().catch(() => {});
  };

  // if (error) {
  //   throw error;
  // }

  return (
    <>
      <Head title="login" />
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
    </>
  );
};
