import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../component/Navbar/Navbar";
import { useRouter } from "next/router";
import { wrapper } from "../redux/store";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/action";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  if (typeof window !== "undefined") {
    console.log("we are running on the client");
    const userData = localStorage.getItem("user");
    const persistedUser = userData ? JSON.parse(userData) : {};

    useEffect(() => {
      if (persistedUser) {
        dispatch(setLogin(persistedUser));
      }
    }, []);
  }

  const router = useRouter();
  const showHeader = router.pathname === "/" ? true : false;

  return (
    <>
      {showHeader && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
