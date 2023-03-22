// NextJS
import Image from "next/image";

// Hooks
import useUser from "@hooks/useUser";

// Shared components
import BtnLink from "../BtnLink";

// Assets
import defaultAvatar from "@assets/images/defaultAvatar.png";

type pathType = {
    href: string;
    label: string;
    current?: boolean;
};

interface HeaderProps {
    path: pathType[];
}

const Header: React.FC<HeaderProps> = ({ path }) => {
    // Custom hooks
    const user = useUser();

    // Constants
    const email = user?.email.split("@")[0].split("").slice(0, 5).join("") + "...@" + user?.email.split("@")[1];
    const username = user?.username.split(" ").map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");

    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md rounded-md mb-6">
            <div className="flex items-center mr-4">
                <Image
                    alt="Avatar" 
                    className="rounded-full border-2 border-primary"
                    height={60}
                    src={user?.avatar || defaultAvatar} 
                    width={60} 
                />
                <div>
                    <h1 className="text-xl font-bold ml-2 text-primary">{username}</h1>
                    <p className="text-sm text-gray-500 ml-2">{email}</p>
                </div>
            </div>
            <div className="flex items-center">
                <BtnLink href={path[0]?.href} active={path[0]?.current}>
                    {path[0]?.label}
                </BtnLink>
                <BtnLink href={path[1]?.href} active={path[1]?.current}>
                    {path[1]?.label}
                </BtnLink>
            </div>
        </header>
    );
};

export default Header;
