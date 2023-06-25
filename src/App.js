import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { theme } from './configs/theme';
import store from './features/store';
import Routing from './routing';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routing />
      </Provider>
    </ThemeProvider>
  );
}

