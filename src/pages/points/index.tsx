// NextJS
import { NextPage } from "next";
import Head from "next/head";

// ReactJS
import React, { useEffect, useState } from "react";

// Shared
import Header from "@shared/components/Header";

// External Dependencies
import { ArrowUturnLeftIcon, ArrowUturnRightIcon } from "@heroicons/react/24/outline";

// Hooks
import useUndo from "@hooks/useUndo";

const PATH = [
    {
        href: "/points", 
        label: "Points",
        current: true
    },
    {
        href: "/palindromes",
        label: "Palindromes",
        current: false
    }
];

const PointsScreen: NextPage = () => {
    const [points, setPoints] = useState<statePoint[]>([]);
    
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const { state, set, undo, redo, canUndo, canRedo } = useUndo(points);

    const handleAddPoint = () => {
        const newPoint = {
            x: position.x,
            y: position.y,
            color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        };
        setPoints([...points, newPoint]);
        set([...points, newPoint]);
    };    

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };
  
        window.addEventListener("mousemove", handleMouseMove);
  
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        setPoints(state.present);
    }, [state.present]);   
    
    return (
        <>
            <Head>
                <title>VTEX | Points</title>
            </Head>
            <div className="w-full h-full">
                <Header path={PATH} />
                <p className="text-sm mx-4 mb-6 text-gray-600 text-center">
                    Click anywhere on the screen to add a point
                </p>
                <div className="w-full flex mb-4 items-center justify-center gap-6">
                    <button
                        className="bg-white mr-2 py-2 px-2 border border-primary rounded-full hover:bg-rose-100 disabled:opacity-50"
                        disabled={!canUndo}
                        onClick={undo}
                    >
                        <ArrowUturnLeftIcon className="h-6 w-6 text-primary"/>
                    </button>
                    <button
                        className="bg-white mr-2 py-2 px-2 border border-primary rounded-full hover:bg-rose-100 disabled:opacity-50"
                        disabled={!canRedo}
                        onClick={redo}
                    >
                        <ArrowUturnRightIcon className="h-6 w-6 text-primary"/>
                    </button>
                </div>

                <div className="w-full h-full" onClick={handleAddPoint}>
                    {points.map((point, index) => (
                        <div
                            key={index}
                            style={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor: point.color,
                                position: "absolute",
                                top: point.y,
                                left: point.x
                            }}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PointsScreen;
