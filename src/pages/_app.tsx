import '@/styles/globals.css'
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import type { AppProps } from 'next/app'
import { StoreContext } from '../../store'
import { Store } from '../../store/Store'
import { useEffect, useState } from 'react'
import Editor from './editor'

export default function App({ Component, pageProps }: AppProps) {
  const [store] = useState(new Store())

  return (
    <ClerkProvider>
      <StoreContext.Provider value={store}>
        <>
          <Component {...pageProps} />
        </>
      </StoreContext.Provider>
    </ClerkProvider>
  )
}
