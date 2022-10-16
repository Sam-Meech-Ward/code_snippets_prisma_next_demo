import '../styles/globals.css'
import 'highlight.js/styles/stackoverflow-dark.css'

import SiteNavigation from "../components/SiteNavigation"

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.setDefaultLocale(en.locale)
TimeAgo.addLocale(en)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SiteNavigation></SiteNavigation>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
