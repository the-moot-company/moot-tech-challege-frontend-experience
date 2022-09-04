import '../styles/globals.css'
import type {AppProps} from 'next/app'
import 'tailwindcss/tailwind.css'
import {DefaultSeo} from 'next-seo'
import Head from 'next/head'
import React, {useEffect} from 'react'
import SEO from '../next-seo.config'
import ReactGA from 'react-ga'
import {Toaster} from 'react-hot-toast'
import {ThemeContextProvider} from "./contexts/ThemeContext";

function MyApp({Component, pageProps}: AppProps) {
  const pageMeta = (Component as any)?.defaultProps?.meta || {}
  const pageSEO = {...SEO, ...pageMeta}

  useEffect(() => {
    if (
      process.env.googleAnalyticsID &&
      process.env.NODE_ENV === 'production'
    ) {
      // Checks for GA ID and only turns on GA in production
      ReactGA.initialize(process.env.googleAnalyticsID)
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  })

  return (
    <React.Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
      </Head>
      <Toaster
        reverseOrder={false}
        toastOptions={{
          success: {
            iconTheme: {
              primary: '#FF8635',
              secondary: '#121212',
            },
            style: {
              color: '#FF8635',
              border: '1px solid #FF8635',
              background: '#121212'
            }
          },
          error: {
            iconTheme: {
              primary: '#FF8635',
              secondary: '#121212',
            },
            style: {
              color: '#FF8635',
              border: '1px solid #FF8635',
              background: '#121212'
            }
          }
        }}
      />
      <DefaultSeo {...pageSEO} />
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </React.Fragment>
  )
}

export default MyApp
