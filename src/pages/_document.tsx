import Document, { Head, Html, Main, NextScript } from "next/document";

const name = "Pousada Refúgio da Serra";
const title = `${name} | Pousada na Serra dos Pireneus em Pirenópolis - GO`;
const description =
  "Pousada no alto da Serra dos Pireneus, cercada pela natureza em ambiente tranquilo e isolado. Estamos próximos ao Parque dos Pireneus e às cachoeiras do Abade, Lázaro e Coqueiros. Chalés amplos, confortáveis e equipados para você praticar sua gastronomia. Um refúgio para o lazer e o trabalho remoto.";

export default class MyDocument extends Document {
  render() {
    return (
      <Html dir="ltr" lang="pt-br">
        <Head>
          {/* Primary Meta Tags*/}
          <meta charSet="utf-8" />
          <meta content="text/html" httpEquiv="content-type" />

          {/* SEO Meta Tags*/}
          <meta content={name} name="author" />
          <meta content={description} name="description" />

          {/* Open Graph / Facebook*/}
          <meta content="website" property="og:type" />
          <meta content={process.env.SITE_URL} property="og:url" />
          <meta content={title} property="og:title" />
          <meta content={`${process.env.SITE_URL}/card.png`} property="og:image" />
          <meta
            content={`ícone da ${title}. O desenho de um passarinho e ao fundo serras com design minimalista`}
            property="og:image:alt"
          />
          <meta content="pt_BR" property="og:locale" />
          <meta content={description} property="og:description" />

          {/* Twitter*/}
          <meta content="summary_large_image" name="twitter:card" />
          <meta content={process.env.SITE_URL} name="twitter:url" />
          <meta content={title} name="twitter:title" />
          <meta content={`${process.env.SITE_URL}/card.png`} name="twitter:image" />
          {/* <meta content="@???" name="twitter:creator" /> */}
          <meta content={description} name="twitter:description" />

          {/* Icons*/}
          <link
            href={`${process.env.SITE_URL}/icons/apple-touch-icon.png`}
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href={`${process.env.SITE_URL}/icons/favicon-32x32.png`}
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href={`${process.env.SITE_URL}/icons/favicon-16x16.png`}
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link href={`${process.env.SITE_URL}/icons/site.webmanifest`} rel="manifest" />
          <link
            color="#f45d22"
            href={`${process.env.SITE_URL}/icons/safari-pinned-tab.svg`}
            rel="mask-icon"
          />
          <link href={`${process.env.SITE_URL}/icons/favicon.ico`} rel="shortcut icon" />
          <meta content="#da532c" name="msapplication-TileColor" />
          <meta
            content={`${process.env.SITE_URL}/icons/browserconfig.xml`}
            name="msapplication-config"
          />
          {/* TODO */}
          <meta content="#efefef" name="theme-color" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
