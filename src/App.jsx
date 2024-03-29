
import { useReducer, useState } from 'react'
import './App.css'
import HomePage from './components/pages/HomePage'
import { MovieContext, ThemContext } from './context/Context'
import { cartReducers, initialState } from './reducers/CardReducers'

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [state, dispatch] = useReducer(cartReducers, initialState)

  return (
    <>
    <ThemContext.Provider value={{darkMode, setDarkMode}}>
    <MovieContext.Provider value={{state, dispatch}}>
      <HomePage/>
    </MovieContext.Provider>
    </ThemContext.Provider>
    </>
  )
}

export default App
