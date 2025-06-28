import { BrowserRouter } from "react-router-dom"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/header/Header"
import AppRoutes from "../routes"
import '@/styles/global.css';

const MainLayout = () => {
  return (
    <>
    <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
    </BrowserRouter>
    </>
  )
}

export default MainLayout