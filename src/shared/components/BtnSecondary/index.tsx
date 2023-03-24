import React from "react";

interface btnSecondaryProps {
    className?: string;
    onClick: () => void;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
};

const BtnSecondary: React.FC<btnSecondaryProps> = ({className, onClick, children, type}) => {    
    return (
        <button type={type} className={`bg-primary rounded-2xl px-4 border-2 border-primary hover:bg-white${className}`} onClick={onClick}>
            {children} 
        </button>
    );
};

export default BtnSecondary;