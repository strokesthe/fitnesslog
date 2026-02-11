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

  const saveSportsUnit = () =>{
    const sportsUnit ={
      id: Date.now(),
      type: sportsType,
      duration: parseInt(sportsDuration)
    }
    addSportsList([...sportsList, sportsUnit])
    addSportsType("")
    addSportsDuration("")
  }




  return (


    <div>

      <input
      type='text'
      placeholder='Sportart'
      value={sportsType}
      onChange={handleSportsTypeInput}
      />

      <input
      type='number'
      placeholder='Sportdauer'
      value={sportsDuration}
      onChange={handleSportsDurationInput}
      />
      <button onClick={saveSportsUnit}>Sporteinheit hinzufügen</button>

     






    </div>
  )


}

export default App
