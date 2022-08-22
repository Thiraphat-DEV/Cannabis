import '../styles/globals.css'
import type { AppProps } from 'next/app'

import React, {Suspense} from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  return( 
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...pageProps} />
  </Suspense>
  )
}

export default MyApp
