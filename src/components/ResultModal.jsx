import React, { forwardRef, useImperativeHandle, useRef } from "react"

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef()
  const userLost = remainingTime <= 0
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    }
  })

  return (
    <dialog className='result-modal' ref={dialog} onClose={onReset}>
      <h2> {userLost ? "You lost" : `Your score: ${score}`}</h2>

      <p>Target time was: {targetTime} sec.</p>
      <p>
        You stopped the timer with the {(remainingTime / 1000).toFixed(2)}{" "}
        seconds left.
      </p>
      <form action='dialog' onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  )
})
export default ResultModal
