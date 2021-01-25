import { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';
import axios from 'axios'

const ChartBar = () => {
  const [cities, setCities] = useState({})

  const data = {
    labels: [],
    datasets: [{
      label: 'Number of offers',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
      ],
      borderColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',

      ],
      borderWidth: 1,
    }]
  }
  const options = {
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 14
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "white",
            fontSize: 12,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "white",
            fontSize: 12,
          },
        },
      ],
    },
  }

  const fetchCitiesCount = async () => {
    try {
      const citiesCount = await axios.get(
        'http://localhost:5000/api/v1/offers/cities'
      )
      citiesCount.data.map(city => (
        data.labels.push(city._id),
        data.datasets[0].data.push(city.count)
      ))
      setCities(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchCitiesCount()
  }, [])

  return (
    <div id="cities">
      <h3>Cities</h3>
      <Bar data={cities} options={options}></Bar>
    </div>
  )
}

export default ChartBar