import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import { Cards } from './components/cards/Cards'
import {PropertyDetails} from "./screens/propertyDetails";
import { CreateProperty } from './screens/createProperty';
import { useReadContract, useReadContracts } from 'wagmi';
import { escrowConfig, realEstateConfig } from './store/config';
function App() {

  const readContract = useReadContract({
    ...realEstateConfig as any,
    functionName: "tokenUri",
    args:[0],
  }) 

  return (
    <>
      <nav className=" top-0 left-0 ring-0 w-full bg-inherit bg-opacity-50">
        <Navbar/>
      </nav>
      <header className="mt-9"></header>
      <main className="px-3 mb-3 mx-auto w-fit">
        <Routes>
          <Route path='*' element={<Cards/>}/>
          <Route path='/property/:id' element={<PropertyDetails/>}/>
          <Route path='/sell' element={<CreateProperty/>}/>
        </Routes>
      </main>
      <footer className="">
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
      </footer>
    </>
  )
}

export default App
