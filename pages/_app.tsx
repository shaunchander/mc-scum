import { AppProps } from 'next/app';
import '../css/tailwind.css';

function MCScum({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MCScum;
