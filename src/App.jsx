import { useState } from 'react'
import './App.css'
import Proshow from './components/proshow.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Proshow />
    
    </div>
    
  )
}

export default App
