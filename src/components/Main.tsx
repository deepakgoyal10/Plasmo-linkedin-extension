import React, { useEffect, useState } from "react"

import { inputBoxSelector } from "~utils/LinkedinSelector"

import InputPromptPopup from "./modal/InputPromptPopup"
import Icon from "./ui/Icon"

const Main = () => {
  const [showPopUp, setShowPopup] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  // Getting input chat box element
  const inputBox = document.querySelector(inputBoxSelector)

  // Show Ai icon only when input box is focused
  useEffect(() => {
    const handleFocus = () => setIsFocused(true)
    const handleBlur = () => setIsFocused(false)

    if (inputBox) {
      inputBox.addEventListener("focus", handleFocus)
      inputBox.addEventListener("blur", handleBlur)
    }

    // Cleanup event listeners on unmount
    return () => {
      if (inputBox) {
        inputBox.removeEventListener("focus", handleFocus)
        inputBox.removeEventListener("blur", handleBlur)
      }
    }
  }, [])

  const handleIconClick = (event: React.MouseEvent) => {
    event.stopPropagation() // Prevent the blur event
    setShowPopup(true)
  }
  return (
    <div className=" h-full absolute top-[70px] left-[380px]">
      {(isFocused || showPopUp) && <Icon onClick={handleIconClick} />}
      {showPopUp && <InputPromptPopup onClose={() => setShowPopup(false)} />}
    </div>
  )
}

export default Main
