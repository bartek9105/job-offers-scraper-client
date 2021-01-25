import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import DataTable from './DataTable/DataTable'
import AppNav from './AppNav/AppNav'

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
    <>
      <AppNav />
      <div className='app'>
        <DataTable data={technologiesCount} />
      </div>
    </>
  )
}

export default App
