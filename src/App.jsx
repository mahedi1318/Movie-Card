
import { useReducer } from 'react'
import './App.css'
import HomePage from './components/pages/HomePage'
import { MovieContext } from './context/Context'
import { cartReducers, initialState } from './reducers/CardReducers'

function App() {

  const [state, dispatch] = useReducer(cartReducers, initialState)

  return (
    <>
    <MovieContext.Provider value={{state, dispatch}}>
      <HomePage/>
    </MovieContext.Provider>
    </>
  )
}

export default App
