import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.displayName = 'MyApp';

export default MyApp
