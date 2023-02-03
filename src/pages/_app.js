import AppBar from "@/Shared/AppBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppBar />
      <Component {...pageProps} />
    </>
  );
}
