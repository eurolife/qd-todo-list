import '../styles/app.scss';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useStore } from '../store';

const MyApp = ({ Component, pageProps }) => {

  const store = useStore(pageProps);

  useEffect(() => {
    if (window?.Cypress) {
      window.store = store;
    }
  }, [store])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
