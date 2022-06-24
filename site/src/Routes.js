
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Consulta from './pages/pegaranime'
import Inserir from './pages/postaranime'


export default function Paths() {
  return (
    <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Consulta/>}></Route>
        <Route exact path='/postaranime' element={<Inserir/>}></Route>
           
            
        </Routes>
    </BrowserRouter>
  )
}