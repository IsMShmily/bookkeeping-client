import { Provider } from 'react-redux'
import { ConfigProvider, theme } from 'antd'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import store from './store'
import router from './router/index'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#ef8a34',
          borderRadius: 500
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
