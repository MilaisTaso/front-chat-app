import React from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { Head } from '@/components/Head/Head';
import { Button } from '@/components/Elements/Button';
import { Container } from '@/components/Layout/Container';
import Hero from '@/assets/hero.png';
import { useSignIn } from '../api/auth';
import { GoogleIcon } from '@/components/svg/GoogleIcon';

export const LoginPage: React.FC = () => {
  const mutation = useSignIn();
  const { showBoundary } = useErrorBoundary();

  const handleSignIn = async () => {
    await mutation.mutateAsync(undefined);

    if (mutation.isError) {
      showBoundary(mutation.error);
    }
  };

  return (
    <>
      <Head title="login" />
      <Container display="flex" className="min-h-screen">
        <Container className='w-1/2 items-center justify-start mt-60 gap-10' display='direction'>
          <h1 className='text-heading1 font-semibold'>Front Chat App</h1>
          <Button onClick={handleSignIn} isLoading={mutation.isPending} className='bg-white text-gray-500 align-bottom text-body shadow-md px-2 py-1 rounded-lg font-semibold'>
            <GoogleIcon styles={{width: '36px', height: '36px', display: 'inline-block', margin: '0.5rem'}}/>
            Sign In With Google
          </Button>
        </Container>
        <div className='w-1/2'>
          <img src={Hero} alt="hero" className="min-h-screen w-full object-cover object-top" />
        </div>
      </Container>
    </>
  );
};