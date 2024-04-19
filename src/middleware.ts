import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/', '/privacy-policy', '/contact'],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ['/', '/privacy-policy', '/contact'],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
