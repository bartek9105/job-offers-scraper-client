import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import DataTable from './DataTable/DataTable'
import DataTableTechs from './DataTableTechs/DataTableTechs'
import AppNav from './AppNav/AppNav'
import ChartBar from './ChartBar'

function App() {
  const [technologiesCount, setTechnologiesCount] = useState([])
  const [citiesTechsCount, setCitiesTechsCount] = useState([])

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

  const fetchCitiesTechsCount = async () => {
    try {
      const citiesTechsCount = await axios.get(
        'http://localhost:5000/api/v1/offers/cities/technologies'
      )
      setCitiesTechsCount(citiesTechsCount.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTechnologiesCount()
    fetchCitiesTechsCount()
  }, [])

  return (
    <>
      <AppNav />
      <div className='app'>
        <div className="container">
          <DataTable data={technologiesCount} />
        </div>
        <div className="container">
          <ChartBar />
        </div>
        <div className="container">
          <DataTableTechs data={citiesTechsCount} />
        </div>

      </div>
    </>
  )
}

export default App
