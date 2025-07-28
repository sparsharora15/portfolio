// Import global styles from the src/styles directory. Since this file
// resides under src/pages, we need to go up one level to access
// styles. Do not use the @ alias here because a jsconfig
// configuration has not been provided.
import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}