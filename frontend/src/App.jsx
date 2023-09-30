import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Mynotes from './pages/Mynotes'
import Login from './pages/login'
import Register from './pages/Registser'
import Create from './pages/Create'
import Notepage from './pages/Notepage'
import Profile from './pages/Profile'
function App() {

  return (
    <><Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/mynotes' element={<Mynotes/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/createnotes' element={<Create/>}/>
      <Route path={'/note/:id'} element={<Notepage/>}/>
      <Route path={'/profile'} element={<Profile/>}/>
    </Routes>
    
    <Footer/>
    </>
  )
}

export default App
