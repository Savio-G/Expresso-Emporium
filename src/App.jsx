import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard'

function App() {
  const coffeeData = useLoaderData()
  return (
    <>
      <h1>Coffees: {coffeeData.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffeeData.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
