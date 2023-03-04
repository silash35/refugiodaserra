import "@/styles/globals.scss";

import { Open_Sans } from "@next/font/google";
import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "@/components/Layout";

const openSans = Open_Sans({
  subsets: ["latin"],
  fallback: ["Arial", "sans-serif"],
  display: "swap",
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* A Tag Viewport não deve ser usada no _document.tsx, por isso está nesse arquivo */}
        {/* Para mais informações acesse: https://nextjs.org/docs/messages/no-document-viewport-meta */}
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>

      <Layout font={openSans}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
