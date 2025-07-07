import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

import { X } from "lucide-react";
import NavLinksList from "./NavLinksList.tsx";
import { commonNavbarStyle } from "./data.tsx";

import type { NavBarProps } from "./types.ts";

const NavBar = ({ isNavBarOpen, setIsNavBarOpen }: NavBarProps) => {
    const navRef = useRef<HTMLDivElement>(null);
    useClickOutside(navRef, () => setIsNavBarOpen(false));

    const mobileNavClass = isNavBarOpen? "translate-x-0" : "translate-x-full";

    return (
        <nav
            ref={navRef}
            role="navigation"
            aria-label="Main Navigation"
            className={`absolute top-0 right-0 bg-white shadow-2xl w-64 h-screen transition duration-500 ease-in-out sm:relative sm:bg-transparent sm:w-auto sm:h-auto sm:translate-x-0 ${mobileNavClass}`}
        >
            <ul className="flex flex-col p-5 gap-5 sm:flex-row sm:p-0">

                {/* Close Button On Mobile */}
                <button
                    type="button"
                    aria-label="Close Navigation"
                    onClick={() => setIsNavBarOpen(false)}
                    className="group w-fit sm:hidden"
                >
                    <X className={`${commonNavbarStyle} group-hover:rotate-180 mb-3`} />
                </button>

                {/* NavBar Links For Mobile & Desktop */}
                <NavLinksList setIsNavBarOpen={setIsNavBarOpen} />

            </ul>
        </nav>
    );
};

export default NavBar;
