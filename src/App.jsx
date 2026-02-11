import { useState } from 'react'
import './App.css'

function App() {
  const [sportsList, addSportsList] = useState([])
  const [sportsType, addSportsType] = useState("")
  const [sportsDuration, addSportsDuration] =useState("")

  const handleSportsTypeInput = (event) =>{
    addSportsType(event.target.value)
  }

  const handleSportsDurationInput = (event) =>{
    addSportsDuration(event.target.value)
  }




  return (


    <div>

      <input
      type='text'
      placeholder='Sportart'
      onChange={handleSportsTypeInput}
      />

      <input
      type='number'
      placeholder='Sportdauer'
      onChange={handleSportsDurationInput}
      />






    </div>
  )


}

export default App
