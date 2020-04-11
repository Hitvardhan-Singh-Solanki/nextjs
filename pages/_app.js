import { AnimatePresence } from 'framer-motion';
import './styles.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
  return <Component {...pageProps} />;
}
