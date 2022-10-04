import { useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <div>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}

export default MyApp;
