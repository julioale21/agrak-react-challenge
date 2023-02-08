import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app/App'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
)
