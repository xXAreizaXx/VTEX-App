// NextJS
import Head from "next/head";

// ReactJS
import { useState } from "react";

// Shared
import BtnPrimary from "@shared/components/BtnPrimary";
import BtnSecondary from "@shared/components/BtnSecondary";
import Header from "@shared/components/Header";

// Constants
const PATH = [
    {
        href: "/points", 
        label: "Points",
        current: false
    },
    {
        href: "/palindromes",
        label: "Palindromes",
        current: true
    }
];

const PalindromoChecker = () => {
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");
    const [history, setHistory] = useState<string[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!/^[a-zA-Z]+$/.test(inputValue)) {
            setResult("Por favor, ingrese sólo letras");
            return;
        }

        const isPalindromo = inputValue === inputValue.split("").reverse().join("");
    
        if (isPalindromo) {
            setResult(`${inputValue} es un palíndromo`);
        } else {
            setResult(`${inputValue} no es un palíndromo`);
        }

        setHistory([...history, inputValue]);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleClearClick = () => {
        setInputValue("");
        setResult("");
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredHistory = history.filter(word => word.toLowerCase().includes(searchTerm));
        setHistory(filteredHistory);
    };

    return (
        <>     
            <Head>
                <title>VTEX | Palindrome</title>
            </Head>
            <div className="w-full h-full">
                <Header path={PATH} />
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4">Palindrome Validator</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="input" className="text-lg mb-2">Enter a word:</label>
                            <input type="text" id="input" className="p-2 border border-gray-300 rounded-md" value={inputValue} onChange={handleInputChange} />
                        </div>
                        <div className="flex gap-2">
                            <BtnPrimary type="submit">
                                <p className="text-primary">Check</p>
                            </BtnPrimary>
                            <BtnSecondary type="button" onClick={handleClearClick}>
                                <p className="text-white">Clear</p>
                            </BtnSecondary>
                        </div>
                    </form>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="history" className="text-lg mb-2">History:</label>
                        <input type="text" id="history" className="p-2 border border-gray-300 rounded-md mb-4" onChange={handleSearch} />
                        <ul className="">  
                            {history.map((word, index) => (
                                <li key={index}>{word}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="result" className="text-lg mb-2">Result:</label>
                        <input type="text" id="result" className="p-2 border border-gray-300 rounded-md" value={result} readOnly />
                    </div>
                </div>
            </div>
        </>

    );
};

export default PalindromoChecker;
