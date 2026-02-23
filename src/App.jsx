import { useState } from 'react'
import './App.css'
import { motion } from "framer-motion";
import mySportsLogo from '/images/AppLogo.png';

function App() {
  const [sportsList, addSportsList] = useState([])
  const [sportsType, addSportsType] = useState("")
  const [sportsDuration, addSportsDuration] = useState("")
  const [totalTime, addTotalTime] = useState(0)

  const handleSportsTypeInput = (event) => {
    addSportsType(event.target.value)
  }

  const handleSportsDurationInput = (event) => {
    addSportsDuration(event.target.value)
  }

 const resetList = () => {
  const confirm = window.confirm("Willst Du die Liste wirklich löschen?");
  if (confirm) {
    addSportsList([]);
    addTotalTime(0)
  }
}


 const saveSportsUnit = () => {
  if (sportsType === "" || sportsDuration === "") {
    alert("Bitte alle Felder ausfüllen!");
  } else {
    const sportsUnit = {
      id: Date.now(),
      type: sportsType,
      duration: parseInt(sportsDuration)
    }
    addSportsList([...sportsList, sportsUnit])
    addTotalTime(prev => prev + sportsUnit.duration);
  }

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
          style={{ width: '120px', height: '120px' }}
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
        <button2 onClick={resetList}>RESET</button2>
      </div>


      <div className="list-container">
        {sportsList.map((item) => (
          <div key={item.id} className="list-item">
            {item.type} : {item.duration} Minuten
            
          </div>
        ))}
      </div>
      <div><h1>Sportminuten {totalTime}</h1></div>
    </div>
  )
}

export default App
