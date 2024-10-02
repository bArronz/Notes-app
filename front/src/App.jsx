import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import './index.css';


const App = () => {

  const routes = (
    <Router>
      <Routes>
        <Route path='/dashboard' exact element = {<Home />} />
        <Route path='/login' exact element = {<Login />} />
        <Route path='/signup' exact element = {<SignUp />} />
      </Routes>
    </Router>

  )

  return (
    <div>
      {routes}
    </div>
  )
}

export default App