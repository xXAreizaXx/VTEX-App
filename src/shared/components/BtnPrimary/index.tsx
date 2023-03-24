import React from "react";

interface btnPrimaryProps {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
};

const BtnPrimary: React.FC<btnPrimaryProps> = ({className, onClick, children, type}) => {    
    return (
        <button type={type} className={`bg-white rounded-2xl px-4 border-2 border-primary hover:bg-rose-100${className}`} onClick={onClick}>
            {children} 
        </button>
    );
};

export default BtnPrimary;
