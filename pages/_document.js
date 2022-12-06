import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/plantone-icon.ico" />
      </Head>
      <body class="bg-white font-light">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
