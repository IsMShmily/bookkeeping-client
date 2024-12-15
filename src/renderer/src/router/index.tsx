import { lazy, Suspense } from 'react'
import { createHashRouter, RouteObject } from 'react-router-dom'
import Loading from '@renderer/components/basic/loading'
import PageError from '@renderer/views/404'
import Nav from '@renderer/components/basic/nav'

const Home = lazy(() => import('@renderer/views/home'))

const lazyLoad = (Component: React.ComponentType) => (
  <Suspense fallback={<Loading />}>
    <Nav />
    <Component />
  </Suspense>
)

const routes: RouteObject[] = [
  {
    path: '/',
    element: lazyLoad(Home)
  },
  {
    path: '*',
    element: <PageError />
  }
]

const router = createHashRouter(routes, {
  future: {
    v7_relativeSplatPath: true
  }
})

export default router
