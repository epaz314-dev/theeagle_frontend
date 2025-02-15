import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { WagmiProvider } from 'wagmi';
import { config } from './Config/config.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GetId from './context/getId.jsx';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GetId>

    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
    </GetId>

  </StrictMode>
);
