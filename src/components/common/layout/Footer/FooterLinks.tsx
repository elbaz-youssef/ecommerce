import { Link } from "react-router-dom";

type LinkType = {
    path: string;
    content: string;
}

interface FooterLinksProps {
    title: string;
    links: LinkType[];
}

const FooterLinks = ({title, links}: FooterLinksProps) => {
    return (
        <div>
            <h5 className="font-bold mb-4">{title}</h5>
            <ul className="group flex flex-col">
            {links.map(({ path, content }, index) => (
                <li key={content + index}>
                <Link
                    to={path}
                    className="group-hover:opacity-60 inline-block px-2 py-1 text-gray-800 transition duration-300 hover:opacity-100"
                >
                    {content}
                </Link>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default FooterLinks;