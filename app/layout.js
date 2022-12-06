import Header from '../components/Header'
import '../styles/globals.css'
import Head from 'next/head'

export default function RootLayout({ children }) {
  return (
    <html>
      <Head>
        <title>Info Countries</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
