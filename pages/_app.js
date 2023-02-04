import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return <Component key={router.route} {...pageProps} />
}

export default MyApp
