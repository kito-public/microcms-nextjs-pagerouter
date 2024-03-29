import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/header'
import Footer from '../components/footer'
import { siteMeta } from '@/libs/constants'

const { siteLang } = siteMeta
export default function Document() {
  return (
    <Html lang={siteLang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
