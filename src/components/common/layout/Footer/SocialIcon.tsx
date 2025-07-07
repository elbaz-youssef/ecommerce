interface SocialIconProps {
    href: string;
    label: string;
    Icon: React.ElementType;
    hover: string;
}

const SocialIcon = ({Icon, href, label, hover}: SocialIconProps) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="group p-3 border border-gray-200 rounded-lg transition duration-300 hover:-translate-y-2">
            <Icon className={`${hover} transition-transform duration-300 group-hover:scale-120`} />
        </a>
    )
}

export default SocialIcon;