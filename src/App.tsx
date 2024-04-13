import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/home/home.pages'
import LoginPage from './pages/login/login.pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
