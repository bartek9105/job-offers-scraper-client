import { useState, useEffect } from 'react'
import axios from 'axios'
import Table from './Table'
import './App.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  const [offers, setOffers] = useState([])
  const [technologiesCounter, setTechnologiesCounter] = useState({})

  const fetchTechnologies = async () => {
    try {
      const technologies = await axios.get('http://localhost:5000/api/v1/offers')
      setOffers(technologies.data)

      const techs = []
      const counter = {}

      offers.map(offer => offer.offers.map(el => el.technologies.map(item => techs.push(item))))

      techs.forEach(tech => {
        counter[tech] ? counter[tech]++ : counter[tech] = 1
      })

      setTechnologiesCounter(Object.keys(counter).map(key => ({ technology: key, amount: counter[key] })))

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTechnologies()
  }, [])

  return (
    <div className="app">
      <h1>Technologies popularity</h1>
      <Table data={technologiesCounter} />
    </div>
  )
}

export default App
