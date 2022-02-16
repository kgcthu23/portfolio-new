import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
