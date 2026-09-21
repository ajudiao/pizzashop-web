import { RouterProvider } from 'react-router-dom';
import './index.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { router } from './routes';
import { Toaster } from 'sonner';
import { ThemeProvider } from './components/theme/theme-provider';

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
        <Toaster richColors />
        <Helmet titleTemplate='%s | Pizza Shop' />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>

  );
}