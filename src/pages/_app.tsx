// NextJS
import type { AppProps } from "next/app";

// Shared
import AppLyout from "@containers/AppLyout";

// Styles
import "@styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppLyout>
            <Component {...pageProps} />
        </AppLyout>
    ); 
}
