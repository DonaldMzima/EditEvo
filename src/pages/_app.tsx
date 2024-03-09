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

// Loading spinner component
const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-800"></div>
    </div>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  const [store] = useState(new Store())
  const [loading, setLoading] = useState(true)

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Adjust the delay time as needed
    return () => clearTimeout(timer)
  }, [])

  return (
    <ClerkProvider>
      <StoreContext.Provider value={store}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Component {...pageProps} />
          </>
        )}
      </StoreContext.Provider>
    </ClerkProvider>
  )
}
