
import { Outlet } from 'react-router-dom'
import Header from './custom/Header'
import { Toaster } from "@/components/ui/sonner";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  );
}

export default Layout