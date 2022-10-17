import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Index'
import Update from './pages/Update/Index'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/update/:id' element={<Update/>} />
      </Routes>
    </Router>
  </React.StrictMode>
)
