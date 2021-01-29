import { useState, useReducer } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Header from "./components/Header";
import { WaedContext } from './hooks/waedContext'
import { ADD, RESET, REEM } from './hooks/actions'

const initState = { employee: { name: 'waed', id: '1' } }

function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case ADD:
      if (payload.key)
      return { ...state, [payload.key]: { name: payload.name, id: payload.id } }
      else
      return state  
      case RESET:
      return { employee: { name: 'init name', id: 'init id' } }
    case REEM:
      return { employee: { name: 'Reem', id: '9' } }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  /* 
   const [username, setUsername] = useState({ employee: { name: 'waed', id: '1' } })
 
   let counter = 1
   const setHandleState = (name, id) => {
     console.log({ name, id })
     const newKey = `employee-${counter++}`
 
     setUsername(prevState => {
       return { ...prevState, [newKey]: { name, id } }
     });
   } */


  return (
    <WaedContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/Home">
            <Home state={state} dispatch={dispatch} />
          </Route>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route path='/contactUs'>
            <ContactUs />
          </Route>
        </Switch>
      </BrowserRouter>
    </WaedContext.Provider>

  );
}

export default App;
