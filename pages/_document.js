import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang='es'>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;500;900&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-WorkSans">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
