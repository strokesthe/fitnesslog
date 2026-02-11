import { useState } from 'react'
import './App.css'
import { motion } from "framer-motion";
import mySportsLogo from '/public/images/AppLogo.png';

function App() {
  const [sportsList, addSportsList] = useState([])
  const [sportsType, addSportsType] = useState("")
  const [sportsDuration, addSportsDuration] = useState("")

  const handleSportsTypeInput = (event) => {
    addSportsType(event.target.value)
  }

  const handleSportsDurationInput = (event) => {
    addSportsDuration(event.target.value)
  }


  const saveSportsUnit = () => {
    const sportsUnit = {
      id: Date.now(),
      type: sportsType,
      duration: parseInt(sportsDuration)
    }
    addSportsList([...sportsList, sportsUnit])
    addSportsType("")
    addSportsDuration("")
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>Fitnesslog</h1>
        <div className='shiny-logo'>
        <motion.img
          src={mySportsLogo}
          width={120}
          height={120}
        />
        </div>
      </div>


      <div className="input-container">
        <input
          type='text'
          placeholder='Sportart'
          value={sportsType}
          onChange={handleSportsTypeInput}
        />
        <input
          type='number'
          placeholder='Dauer in Minuten'
          value={sportsDuration}
          onChange={handleSportsDurationInput}
        />
        <button onClick={saveSportsUnit}>Sporteinheit hinzufügen</button>
      </div>


      <div className="list-container">
        {sportsList.map((item) => (
          <div key={item.id} className="list-item">
            {item.type} : {item.duration} Minuten
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
