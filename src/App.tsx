import AppProvider from './providers/app';
import { AppRoutes } from './routes/provider';

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
