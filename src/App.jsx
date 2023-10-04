import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BodyLayout from './reuseables/BodyLayout'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from 'react-router-dom';

import {styled} from "styled-components"
import Dashboard from './Routes/Dashboard'
function App() {
  return (
      <Router>
      <Routes>
        {/* <Route element={<InActivityTimeOut />}> */}
        <Route>
          
            {/* Dashboard Routes */}
            {/* <Route element={<ProtectedRoute />}> */}
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/agent' element={<Dashboard/>} />
           
            {/* </Route> */}
            <Route path='*' element={<h1>Error</h1>} />

        </Route>
      </Routes>
      </Router>
 
    

  )
}

export default App