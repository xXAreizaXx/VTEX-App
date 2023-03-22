// NextJS
import { useRouter } from "next/router";

// ReactJS
import { useState, useEffect } from "react";

// Firebase
import { onAuthStateChanged } from "@firebase/client";

// Constants
export const USER_STATES = {
    NOT_LOGGED: null,
    NOT_KNOWN: undefined,
};

export default function useUser() {
    const [user, setUser] = useState<userTypes | undefined>(USER_STATES.NOT_KNOWN);
    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(setUser);        
    }, []);

    useEffect(() => {
        user === USER_STATES.NOT_LOGGED && router.push("/");        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);     

    return user;
}