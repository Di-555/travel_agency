import React from 'react';
import './styles/global.scss';
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import { router } from './router/router';
import { UserContextProvider } from './context/UserContext';

const queryClient = new QueryClient()

export const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

