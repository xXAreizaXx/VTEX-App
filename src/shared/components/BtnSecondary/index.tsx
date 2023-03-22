import React from "react";

interface btnSecondaryProps {
    className?: string;
    onClick: () => void;
    children: React.ReactNode;
};

const BtnSecondary: React.FC<btnSecondaryProps> = ({className, onClick, children}) => {    
    return (
        <button className={`bg-primary rounded-2xl px-4 border-2 border-primary hover:bg-white${className}`} onClick={onClick}>
            {children} 
        </button>
    );
};

export default BtnSecondary;