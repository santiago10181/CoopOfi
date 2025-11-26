import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <Routes>
      <Route path="/CoopOfi" element={<Home />} />
      <Route path="/CoopOfi/login/" element={<Login />} />
      <Route path="/CoopOfi/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
