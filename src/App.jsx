import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <Routes>
      <Route path="/CoopOfi" element={<Home />} />
      <Route path="/CoopOfi/login/" element={<Login />} />
    </Routes>
  )
}

export default App
