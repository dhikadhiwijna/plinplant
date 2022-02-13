import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../component/Navbar/Navbar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/login" || router.pathname === "/register"
      ? false
      : true;
  return (
    <>
      {showHeader && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
