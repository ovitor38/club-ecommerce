import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import UserContextprovider from './context/user.context'
import CategoryContextProvider from './context/category.context'
import CartContextProvider from './context/cart.context'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <UserContextprovider>
      <CategoryContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </CategoryContextProvider>
    </UserContextprovider>
  </React.StrictMode>
)

reportWebVitals()
