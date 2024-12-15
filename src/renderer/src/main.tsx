import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import store from './store'
import router from './router/index'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          // colorPrimary: '#D44459',
          // borderRadius: 2
        },
        components: {
          Layout: {
            siderBg: '#fff'
          }
        }
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </Provider>
)
