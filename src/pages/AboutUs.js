
import { useContext, useState } from 'react'
import { WaedContext } from '../hooks/waedContext'
import {ADD} from '../hooks/actions'

function AboutUs() {
    const [name, setName] = useState()
    const [id, setid] = useState()
    const [key, setKey] = useState()
    const { state, dispatch } = useContext(WaedContext)

    const setNewstate = (obj) => {
        const { name, id } = obj
        dispatch(name, id)
    }

    const setAddedName = (e) => {
        const { value } = e.target
        setName(value)
    }
    const setAddedId = (e) => {
        const { value } = e.target
        setid(value)
    }



    const appendEmployee = () => {
        dispatch({ type: ADD, payload: { key, name, id } })
    }

    return (
        <div style={{ background: 'blue', height: '90vh' }}>
            <h1>AboutUs</h1>
            <h2>{JSON.stringify(state)}</h2>
            <button onClick={() => setNewstate({ name: 'asem ', id: '50' })}>set name</button><br></br>



            <input value={key} onChange={(e)=>setKey(e.target.value)}></input>
            <input value={name} onChange={setAddedName}></input>
            <input value={id} onChange={setAddedId}></input><br></br>
            {/* we work here! */} <button onClick={appendEmployee}>Append Employee</button><br></br>
        </div>
    );
}

export default AboutUs;
