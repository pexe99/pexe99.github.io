import React, { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"
import LightMode from "./LightMode"
import BaseMode from "./BaseMode"
import DarkMode from "./DarkMode"

const PrismStyler = () => {
  const context = useContext(ThemeContext)
  const { ThemeMode } = context

  return (
    <>
      <BaseMode />
      {ThemeMode === "light" ? <LightMode /> : <DarkMode />}
    </>
  )
}

export default PrismStyler
