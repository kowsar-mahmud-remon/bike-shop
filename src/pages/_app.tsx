import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return getLayout(<Component {...pageProps} />);
}
