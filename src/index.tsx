import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NotificationsProvider } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { theme } from 'theme';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('kich') as HTMLElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
          <App />
        </NotificationsProvider>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
