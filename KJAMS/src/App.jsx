import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import GridSystem from './Components/GridSystem'
import Buttons from './Components/Buttons'
import ExtendedTables from './Components/ExtendedTables' 
import { Button } from 'reactstrap'
import Sidebar from './Components/Sidebar'
import Faculty from './Pages/Faculty'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='Center'>
        <Faculty />
      </div>
  )
}

export default App
