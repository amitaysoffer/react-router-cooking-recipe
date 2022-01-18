// @ts-nocheck
import { createContext, useReducer } from "react"

// @ts-ignore
export const ThemeContext = createContext()

const themeReducer = (state, action) => {
  console.log("inside themeReducer")
  console.log(action)
  console.log(state)
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload }
    // return { ...state, action.payload }
    default:
      return state
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { color: "red" })

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color })
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  )
}
