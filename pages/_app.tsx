import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Footer from '../components/Footer/index';
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer></Footer>
    </Layout>
  );
}
