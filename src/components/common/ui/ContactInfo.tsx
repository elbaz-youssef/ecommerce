import { Mail, MapPin, Phone } from "lucide-react";

type itemType = {
    id: number,
    icon: React.ReactElement,
    content: string;
}

const contactItems: itemType[] = [
    {
        id: 1,
        icon: <Mail />,
        content: "mail@gmail.com"
    },
    {
        id: 2,
        icon: <Phone />,
        content: "+212 601020304"
    },
    {
        id: 3,
        icon: <MapPin />,
        content: "Agadir, Morocco"
    },
];

const ContactInfo = () => {
    return (
        <ul className="flex flex-col gap-5">
            {
                contactItems.map(({id, icon, content}) => (
                    <li 
                        key={id}
                        className="flex items-center gap-3"
                    >
                        <span>{icon}</span>
                        <span className="text-[var(--gray)]">{content}</span>
                    </li>
                ))
            }
        </ul>
    )
}

export default ContactInfo;