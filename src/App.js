import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard.js'
import Categories from './components/Categories.js'
import Expenses from './components/Expenses.js'
import MyStats from './components/MyStats.js'
import Navbar from './components/Navbar.js'
const App = () => {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/category/:name" element={<Categories />} />
    <Route path="/expenses" element={<Expenses />} />
    <Route path="/stats" element={<MyStats />} />
  </Routes>
  
  </BrowserRouter>
  )
}

export default App
