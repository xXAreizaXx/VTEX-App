// NextJS
import BtnPrimary from "@shared/components/BtnGoogle";
import BtnSecondary from "@shared/components/BtnSecondary";
import Header from "@shared/components/Header";
import { NextPage } from "next";
import Head from "next/head";

// ReactJS
import { useState } from "react";

const isPalindrome = (word: string): boolean => {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
};

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

const PalindromesScreen: NextPage = () => {
    const [word, setWord] = useState("");

    const [isPal, setIsPal] = useState(false);

    const [check, setCheck] = useState(false);

    const handleCheckPalindrome = () => {
        const isPalindromeWord = isPalindrome(word.toLowerCase());

        setCheck(true);
        setIsPal(isPalindromeWord);
    };

    const handleClear = () => {
        setWord("");
        setCheck(false);
        setIsPal(false);
    };

    return (
        <>
            <Head>
                <title>VTEX | Palindrome</title>
            </Head>
            <div className="w-full h-full">
                <Header path={PATH} />
                <div className="flex flex-col justify-center py-2 px-6 gap-4">
                    <h1 className="text-xl font-bold text-primary">Palindrome Checker</h1>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Enter a word"
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                            className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <BtnPrimary onClick={handleCheckPalindrome}>
                            <p className="text-primary">Check</p>
                        </BtnPrimary>
                        <BtnSecondary onClick={handleClear}>
                            <p className="text-white">Clear</p>
                        </BtnSecondary>
                    </div>
                    {check && (
                        <div className={`p-2 mb-4 ${isPal ? "bg-green-100 text-green-700" : "bg-red-100 text-primary"} rounded-lg`}>
                            <p className="font-bold">
                                {word} is {!isPal && "not"} a palindrome
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>

    );
};

export default PalindromesScreen;
