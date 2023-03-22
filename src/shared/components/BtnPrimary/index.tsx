import React from "react";

interface btnPrimaryProps {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
};

const BtnPrimary: React.FC<btnPrimaryProps> = ({className, onClick, children}) => {    
    return (
        <button className={`bg-white rounded-2xl px-4 border-2 border-primary hover:bg-rose-100${className}`} onClick={onClick}>
            {children} 
        </button>
    );
};

export default BtnPrimary;
