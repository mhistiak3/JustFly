
import { Outlet } from 'react-router-dom'
import Header from './custom/Header'
import { Toaster } from "@/components/ui/sonner";
import { GoogleOAuthProvider } from '@react-oauth/google';
const Layout = () => {
  return (
    <>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}
      >
        <Header />
        <Outlet />
        <Toaster />
      </GoogleOAuthProvider>
    </>
  );
}

export default Layout