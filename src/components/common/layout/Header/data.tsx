import { ShoppingCart } from "lucide-react";

export const commonNavbarStyle = "cursor-pointer transition duration-300 hover:text-[var(--primary)]";

export const navLinks = [
    {
      path: "/",
      content: "Home",
    },
    {
      path: "/shop",
      content: "Shop",
    },
    {
      path: "/blog",
      content: "Blog",
    },
    {
      path: "/about",
      content: "About",
    },
    {
      path: "/contact",
      content: "Contact",
    },
    {
      path: "/cart",
      content:
        <button
          type="button"
          aria-label="Open Shopping Cart"
          className="hidden sm:block"
        >
          <ShoppingCart />
        </button>
    }
];