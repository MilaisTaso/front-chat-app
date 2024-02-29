import React from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { Button } from '@/components/Elements/Button';
import { Container } from '@/components/Layout/Container';
import Hero from '@/assets/hero.png';
import { useSignIn } from '../api/auth';
import { GoogleIcon } from '@/components/svg/GoogleIcon';
import { Spinner } from '@/components/Elements/Spinner';
import { customerAtom } from '../state/use-auth';

export const LoginPage: React.FC = () => {
  const [customer] = useAtom(customerAtom);
  const mutation = useSignIn();
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();

  const handleSignIn = async () => {
    await mutation.mutateAsync(undefined);

    if (mutation.isSuccess) {
      navigate('/chat');
    }

    if (mutation.isError) {
      showBoundary(mutation.error);
    }
  };

  React.useEffect(() => {
    if (customer) {
      navigate('/chat');
    }
  }, [customer, navigate]);

  return (
    <>
      {mutation.isPending && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Spinner size="lg" />
        </div>
      )}
      <Container display="flex" className="min-h-screen">
        <Container
          className="w-1/2 items-center justify-start mt-60 gap-10"
          display="direction"
        >
          <h1 className="text-heading1 font-semibold">Front Chat App</h1>
          <Button
            onClick={handleSignIn}
            isLoading={mutation.isPending}
            variant="secondary"
            className="align-bottom text-body shadow-md px-2 py-1 rounded-lg font-semibold"
          >
            <GoogleIcon
              styles={{
                width: '36px',
                height: '36px',
                display: 'inline-block',
                margin: '0.5rem',
              }}
            />
            Sign In With Google
          </Button>
        </Container>
        <div className="w-1/2">
          <img
            src={Hero}
            alt="hero"
            className="min-h-screen w-full object-cover object-top"
          />
        </div>
      </Container>
    </>
  );
};
