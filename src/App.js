import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [countedTechnologies, setCountedTechnologies] = useState({})

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
      setCountedTechnologies(counter)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTechnologies()
  }, [])

  return (
    <>
      {Object.keys(countedTechnologies).map(key => (
        <p>{key} {countedTechnologies[key]}</p>
      ))}
    </>
  )
}

export default App
