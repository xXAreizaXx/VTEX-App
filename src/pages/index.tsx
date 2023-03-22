// NextJS
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

// ReactJS
import { useEffect } from "react";

// Shared
import BtnPrimary from "@shared/components/BtnPrimary";
import Loader from "@shared/components/Loader";

// Firebase
import { loginWithGoogle } from "@firebase/client";

// Hooks
import useUser, { USER_STATES } from "@hooks/useUser";

// Assets
import Logo from "@assets/images/logo.png";
import iconGoogle from "@assets/svg/google.svg";

export default function Login() {
    const user = useUser();
    const router = useRouter();

    useEffect(() => {
        user && router.replace("/points");
    }, [router, user]);      

    return (
        <>
            <Head>
                <title>VTEX | Login</title>
                <link rel="icon" href="favicon.ico" />
            </Head>
            {user === USER_STATES.NOT_KNOWN 
                ? <Loader />
                : 
                <div className="w-full h-full">
                    <div className="h-full flex flex-col items-center justify-center gap-10">
                        <Image src={Logo} alt="Logo VTEX" width={200} height={200} />
                        <p className="text-lg font-black text-rose-300">Tecnic test to VTEX</p>
                        <p className="text-lg font-black text-rose-300">Loggued with Google</p>
                        {user === USER_STATES.NOT_LOGGED && 
                        <BtnPrimary className="" onClick={loginWithGoogle}>
                            <p className="flex flex-row justify-between items-center gap-4">
                                <span className="text-2xl font-black text-primary">Google</span><Image src={iconGoogle} alt="Google Logo" width={50} height={50} />
                            </p>
                        </BtnPrimary>
                        }
                    </div>
                </div>
            }
        </>
    );
}
