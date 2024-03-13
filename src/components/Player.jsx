import { useState, useRef } from "react"

export default function Player() {
  const [player, setPlayer] = useState(null)
  
  const playerName = useRef()
  

  return (
    <section id='player'>
      <h2>Welcome {player ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type='text'
        />
        <button onClick={() => setPlayer(playerName.current.value)}>
          Set Name
        </button>
      </p>
    </section>
  )
}
