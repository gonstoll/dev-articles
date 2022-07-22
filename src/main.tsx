import React from 'react';
import ReactDOM from 'react-dom/client';
import Articles from './Articles';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Articles />
    </QueryClientProvider>
  </React.StrictMode>
);
