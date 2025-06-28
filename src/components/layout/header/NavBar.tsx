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
    ];

    return (
        <>
            {
                navLinks.map(({path, content}) => (
                    <li 
                        key={path}
                        onClick={onClose}
                    >
                        <NavLink
                            to={path}
                            className={({ isActive }) => (isActive ? "active" : "")}
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