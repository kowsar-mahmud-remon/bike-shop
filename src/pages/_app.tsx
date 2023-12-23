import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }: any) {
  const getLayout = Component.getLayout || ((page: any) => page);

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
