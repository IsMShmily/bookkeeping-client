import { lazy, Suspense } from 'react'
import { createHashRouter, RouteObject } from 'react-router-dom'
import Loading from '@renderer/components/basic/loading'
import PageError from '@renderer/views/404'
import Nav from '@renderer/components/basic/nav'

const Login = lazy(() => import('@renderer/views/login'))

const lazyLoad = (Component: React.ComponentType) => (
  <Suspense fallback={<Loading />}>
    <Nav />
    <Component />
  </Suspense>
)

const routes: RouteObject[] = [
  {
    path: '/',
    element: lazyLoad(Login)
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
