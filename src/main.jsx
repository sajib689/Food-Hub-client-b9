
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <QueryClientProvider client={queryClient}>
  <AuthProvider>
  <RouterProvider router={router}>
    <Toaster/>
  </RouterProvider>
  </AuthProvider>
  </QueryClientProvider>
  </>,
)
