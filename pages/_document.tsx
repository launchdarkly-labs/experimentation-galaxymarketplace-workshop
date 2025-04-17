import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className=''>
      <Head>
        <title>Galaxy Marketplace</title>
        <meta name="description" content="Galaxy Marketplace - A galaxy of stores at your fingertips" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
