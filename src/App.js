import { useState, useEffect } from 'react'
import axios from 'axios'
import Table from './Table'
import './App.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  const [technologies, setTechnologies] = useState([])
  const [data, setData] = useState([])

  const fetchTechnologies = async () => {
    try {
      const technologies = await axios.get('http://localhost:5000/api/v1/offers')
      setTechnologies(technologies.data)
      const counter = {}
      const techs = []
      technologies.data.map(technology => {
        technology.technologies.map(item => {
          item.technologies.map(el => techs.push(el))
        })
      })
      techs.forEach(el => {
        counter[el] ? counter[el]++ : counter[el] = 1
      })

      setData(Object.keys(counter).map(key => ({ name: key, amount: counter[key] })))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTechnologies()
  }, [])

  return (
    <>
      <Table data={data} />
    </>
  )
}

export default App
