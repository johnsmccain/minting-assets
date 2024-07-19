import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import { Cards } from './components/cards/Cards'

function App() {

  return (
    <>
      <nav className="">
        <Navbar/>
      </nav>
      <main className="px-3 mb-3">
        <Routes>
          <Route path='*' element={<Cards/>}/>
        </Routes>
      </main>
      <footer className=""></footer>
    </>
  )
}

export default App
