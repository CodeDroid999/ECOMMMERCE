import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}

export default function App({ Component, pageProps }: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps;

  useEffect(() => {
    // Add any global initialization logic here
  }, []);

  return (
    <>
      <Toaster position="bottom-center" />
      <Component {...pageProps} />
    </>
  );
}
