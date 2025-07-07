import { NavLink } from "react-router-dom";
import { navLinks } from "./data";
import type { SetBoolean } from "./types";
import React from "react";

interface NavLinksListProps {
    setIsNavBarOpen: SetBoolean;
}

const NavLinksList = ({setIsNavBarOpen}: NavLinksListProps) => {

    return (
        <>
            {
                navLinks.map(({ path, content }) => (
                    <li key={path}>
                        <NavLink
                            to={path}
                            className={({ isActive }) => (isActive ? "active" : "")}
                            onClick={() => setIsNavBarOpen(false)}
                        >
                            {content}
                        </NavLink>
                    </li>
                ))
            }
        </>
    )
}

export default React.memo(NavLinksList);