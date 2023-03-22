// ReactJS
import { useState } from "react";

function useLocalStorage(key: string, initialValue?: any) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            let item: string = initialValue;

            if (typeof window !== "undefined") {
                item = window.localStorage.getItem(key) || initialValue;
            }

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (value: object) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
}

export default useLocalStorage;
