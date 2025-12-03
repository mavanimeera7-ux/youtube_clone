import React from 'react'
import Data from './Componet/Data'
import Nav from './Componet/Nav'
import Slidebar from './Componet/Slidebar'

function App() {
  return (
    <>
      <div className='sticky top-0 z-10 bg-white'>
        {/* <Nav /> */}
      </div>
      <div className='flex '>
        <Slidebar />
        <Data />
      </div>
    </>
  )
}

export default App
