
import { Outlet } from 'react-router-dom'

import { Toaster } from "@/components/ui/sonner";
import { GoogleOAuthProvider } from '@react-oauth/google';
const Layout = () => {
  return (
    <>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}
      >
       
        <Outlet />
        <Toaster />
      </GoogleOAuthProvider>
    </>
  );
}

export default Layout