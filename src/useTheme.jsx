import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    return console.log("need to wrap Context on the relevant component")
  }

  return context
}
