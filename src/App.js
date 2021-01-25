import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Table from './Table'

function App() {
  const [technologiesCount, setTechnologiesCount] = useState([])

  const fetchTechnologiesCount = async () => {
    try {
      const technologiesCount = await axios.get(
        'http://localhost:5000/api/v1/offers/technologies'
      )
      setTechnologiesCount(technologiesCount.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTechnologiesCount()
  }, [])

  return (
    <div className='app'>
      <h1>Technologies popularity</h1>
      <Table data={technologiesCount} />
    </div>
  )
}

export default App
