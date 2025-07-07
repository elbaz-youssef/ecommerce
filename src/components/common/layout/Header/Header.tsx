import { useState } from 'react';
import NavBar from './NavBar';
import Logo from '@/components/common/ui/Logo';
import MobileIcons from './MobileIcons.tsx';

const Header = () => {
    const [isNavBarOpen, setIsNavBarOpen] = useState(false);
    
    return (
        <header className="sticky top-0 left-0 w-full py-3 bg-white z-50 shadow-lg">
            <div className="container">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Logo />

                    {/* NavBar */}
                    <NavBar isNavBarOpen={isNavBarOpen} setIsNavBarOpen={setIsNavBarOpen} />

                    {/* Mobile Icons(cart + bar) */}
                    <MobileIcons isNavBarOpen={isNavBarOpen} setIsNavBarOpen={setIsNavBarOpen} />

                </div>
            </div>
        </header>
    )
}

export default Header