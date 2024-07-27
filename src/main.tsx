import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'
import { Toaster } from 'react-hot-toast'
// import { Provider } from 'react-redux'
// import { store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Toaster position="bottom-center" reverseOrder={false} />
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>
)
