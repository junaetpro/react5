import { useState } from 'react'
import Nav from './component/NavSection/Nav'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Error from './pages/Error'
import About_page from './pages/About_page';
import Portfolio_page from './pages/Portfolio_page';
import Service_page from './pages/Service_page';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HashRouter>
    <Nav/>

    <Routes>
      <Route basename="/react5" path='/' element={<Home/>}/>
      <Route basename="/react5" path='/about' element={<About_page/>}/>
      <Route basename="/react5" path='/service' element={<Service_page/>}/>
      <Route basename="/react5" path='/portfolio' element={<Portfolio_page/>}/>
      <Route basename="/react5" path='*' element={<Error/>}/>
    </Routes>
      
      
    </HashRouter>

      
    </>
  )
}

export default App
