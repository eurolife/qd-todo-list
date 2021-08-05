import '../styles/app.scss';
import { Provider } from 'react-redux';
import { useStore } from '../store';

const MyApp = ({ Component, pageProps }) => {

  const store = useStore(pageProps);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
