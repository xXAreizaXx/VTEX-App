// NextJS
import Link from "next/link";

interface BtnLinkProps {
    children: React.ReactNode;
    href: string;
    active?: boolean;
}

const BtnLink: React.FC<BtnLinkProps> = ({ children, href, active = false }) => {
    return (
        <Link href={href} className={active ? "bg-primary text-white px-2 py-2 border-2 border-white mr-2 hover:bg-rose-400 rounded-md" : "bg-white text-primary px-2 py-2 border-2 border-white border-b-primary mr-2 hover:bg-rose-100"}>
            {children}
        </Link>
    );
};

export default BtnLink;
