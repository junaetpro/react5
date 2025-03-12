import { useState } from 'react'
import Nav from './component/NavSection/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Error from './pages/Error'
import About_page from './pages/About_page';
import Portfolio_page from './pages/Portfolio_page';
import Service_page from './pages/Service_page';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Nav/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About_page/>}/>
      <Route path='/service' element={<Service_page/>}/>
      <Route path='/portfolio' element={<Portfolio_page/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
      
      
    </BrowserRouter>

      
    </>
  )
}

export default App
