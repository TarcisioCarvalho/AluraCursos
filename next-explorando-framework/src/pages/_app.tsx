import '@/styles/globals.css'
import GlobalStyle from '@/themes/GlobalStyle'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />
    </>
  )
}
