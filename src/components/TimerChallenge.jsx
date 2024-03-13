import React, { useRef, useState } from "react"
import ResultModal from "./ResultModal"

function TimerChallenge({ title, targetTime }) {
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000)
  const timerIsActive = remainingTime > 0 && remainingTime < targetTime * 1000
  const timer = useRef()
  const dialog = useRef()
  if (remainingTime <= 0) {
    clearInterval(timer.current)

    dialog.current.open()
  }
  function handleTimerReset() {
    setRemainingTime(targetTime * 1000)
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10)
    }, 10)
  }

  function handleStop() {
    clearInterval(timer.current)
    dialog.current.open()
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={remainingTime}
        onReset={handleTimerReset}
      />

      <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>{targetTime} sec.</p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"} challenge
        </button>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running..." : "Timer is not running..."}
        </p>
      </section>
    </>
  )
}

export default TimerChallenge
