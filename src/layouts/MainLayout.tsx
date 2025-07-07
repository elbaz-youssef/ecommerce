import Footer from "../components/common/layout/Footer/Footer"
import Header from "../components/common/layout/Header/Header"
import ScrollTop from "../components/common/ui/ScrollTop";
import '@/styles/global.css';
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
          <Header />
          <main className="min-h-screen">
            <Outlet />
          </main>
          <ScrollTop />
          <Footer />
        </>
    )
}

export default MainLayout