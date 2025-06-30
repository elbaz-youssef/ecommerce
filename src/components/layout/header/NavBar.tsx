import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavBar = ({onClose}: {onClose: () => void}) => {
        const navLinks = [
        {
            path: "/",
            content: "Home"
        },
        {
            path: "/shop",
            content: "Shop"
        },
        {
            path: "/blog",
            content: "Blog"
        },
        {
            path: "/about",
            content: "About"
        },
        {
            path: "/contact",
            content: "Contact"
        },
        {
            path: "/cart",
            content: <button 
                        type="button" 
                        aria-label="Open Shopping Cart"
                        className="hidden sm:block"
                    >
                        <ShoppingCart />
                    </button>
        }
    ];

    return (
        <>
            {
                navLinks.map(({path, content}) => (
                    <li 
                        key={path}
                    >
                        <NavLink
                            to={path}
                            className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={onClose}
                        >
                            {content}
                        </NavLink>
                    </li>
                ))
            }
        </>
    )
}

export default NavBar