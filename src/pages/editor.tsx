import { Suspense, useEffect, useState } from 'react'
import { Store } from '../../store/Store'
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs'
import Editor from '@/components/Editor'
import { StoreContext } from '../../store'
import { ReactSwipeable } from '@/components/testSwipeable/ReactSwipeable'

const EditorWithStore = () => {
  const [store] = useState(new Store())
  const [isMobile, setIsMobile] = useState(false)
  const [showSwipeable, setShowSwipeable] = useState(false) // Initialize to false initially

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    // Update showSwipeable based on isMobile
    setShowSwipeable(isMobile)
  }, [isMobile]) // Re-run this effect whenever isMobile changes

  return (
    <StoreContext.Provider value={store}>
      <Suspense fallback={<h2>🌀 Loading...</h2>}>
        <SignedIn>
          {isMobile && showSwipeable ? (
            <div className="h-screen flex justify-center items-center">
              <ReactSwipeable />
            </div>
          ) : (
            <Editor />
          )}
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </Suspense>
    </StoreContext.Provider>
  )
}
export default EditorWithStore
