import { Link } from "react-router-dom";
import { AlignRight, ShoppingCart } from "lucide-react";
import { commonNavbarStyle } from "./data";

import type { NavBarProps } from "./types";

const MobileIcons = ({isNavBarOpen, setIsNavBarOpen}: NavBarProps) => {
    console.log("hello from mobile");
    return (
        <div className="flex items-center gap-5 sm:hidden">

            {/* Cart Icon */}
            <Link to="/cart">
                <button 
                    type="button" 
                    aria-label="Open Shopping Cart"
                >
                    <ShoppingCart className={`${commonNavbarStyle}`} />
                </button>
            </Link>
            
            {/* Bar Icon */}
            <button
                type="button"
                aria-label="Open Navigation"
                aria-expanded={isNavBarOpen}
                aria-controls="navbar"
                onClick={() => setIsNavBarOpen(true)}
            >
                <AlignRight className={`${commonNavbarStyle}`} />
            </button>
        </div>
    )
}

export default MobileIcons;