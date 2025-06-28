import { useState } from 'react'
import { Link} from 'react-router-dom'
import { X, ShoppingCart, AlignRight } from 'lucide-react'
import logo from '@/assets/logo.png'
import NavBar from './NavBar'

const Header = () => {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);
    const mobileNavClass = isNavBarOpen? "translate-x-0" : "translate-x-full";
    const commonStyle = "cursor-pointer transition duration-300 hover:text-[var(--primary)]";

    return (
        <header className="sticky top-0 left-0 bg-[var(--lightPurple)] w-full py-3 z-50 shadow-lg">
            <div className="container px-5 mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <Link to="/">
                            <img src={logo} alt="logo" loading="lazy" />
                        </Link>
                    </div>
                    <nav 
                        role="navigation" 
                        aria-label="Main Navigation"
                        className={`absolute top-0 right-0 bg-[var(--lightPurple)] w-64 h-screen transition duration-500 ease-in-out sm:relative sm:bg-transparent sm:w-auto sm:h-auto sm:translate-x-0 ${mobileNavClass}`}
                    >
                        <ul className="flex flex-col p-5 gap-5 sm:flex-row sm:p-0">
                            <button 
                                type="button"
                                aria-label="Close Navigation"
                                onClick={() => setIsNavBarOpen(false)}
                                className="group w-fit sm:hidden"
                            >
                                <X className={`${commonStyle} group-hover:rotate-180 mb-3`} />
                            </button>
                            <NavBar onClose={() => setIsNavBarOpen(false)} />
                            <button 
                                type="button"
                                aria-label="Open Shopping Cart"
                                className="hidden sm:block"
                            >
                                <ShoppingCart className={`${commonStyle}`} />
                            </button>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-5 sm:hidden">
                        <button 
                            type="button" 
                            aria-label="Open Shopping Cart"
                        >
                            <ShoppingCart className={`${commonStyle}`} />
                        </button>
                        <button 
                            type="button"
                            aria-label="Open Navigation"
                            onClick={() => setIsNavBarOpen(true)}
                        >
                            <AlignRight className={`${commonStyle}`} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header