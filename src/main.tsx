import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'
import { GameProvider } from './contexts/GameProvider';

const container = document.getElementById('root');
const root = createRoot(container as Element);
export const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <GameProvider>
      <App />
    </GameProvider>
  </QueryClientProvider>,
);
