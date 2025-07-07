import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import playStore from "@/assets/pay/play.jpg";
import appStore from "@/assets/pay/app.jpg";

export const footerLinks = [
  {
    id: 1,
    title: "About",
    links: [
      {
        path: "/about",
        content: "About Us",
      },
      {
        path: "#",
        content: "Delivery Information",
      },
      {
        path: "#",
        content: "Privacy Policy",
      },
      {
        path: "#",
        content: "Terms & Conditions",
      },
      {
        path: "/contact",
        content: "Contact",
      },
    ],
  },
  {
    id: 2,
    title: "My Account",
    links: [
      {
        path: "#",
        content: "Sign In",
      },
      {
        path: "/cart",
        content: "View Cart",
      },
      {
        path: "#",
        content: "My Wishlist",
      },
      {
        path: "#",
        content: "Track My Order",
      },
      {
        path: "#",
        content: "Help",
      },
    ],
  },
];

export const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
    hover: "group-hover:text-blue-500",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    hover: "group-hover:text-pink-500",
    label: "Instagram",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com",
    hover: "group-hover:text-sky-500",
    label: "Twitter",
  },
  {
    icon: FaGithub,
    href: "https://github.com",
    hover: "group-hover:text-black",
    label: "Github",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com",
    hover: "group-hover:text-blue-600",
    label: "Linkedin",
  },
];

export const apps = [
  {
    id: 1,
    href: "https://apple.com",
    label: "app store",
    srcImg: appStore,
    altImg: "app store",
  },
  {
    id: 2,
    href: "https://play.google.com",
    label: "play store",
    srcImg: playStore,
    altImg: "play store",
  },
];