import { useState } from 'react'
import {RESET} from '../hooks/actions'

function Home(props) {
    const [name, setName] = useState('')
    const [id, setid] = useState('')

    const setNewstate = () => {
        props.dispatch('Waed change from Home', '10')
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
        props.dispatch(name, id)
    }
    const setReInit = () => {
        props.dispatch({ type: RESET })
    }
    return (
        <div style={{ background: 'red', height: '90vh' }}>
            <h1>Home</h1>
            <h2>Name: === {JSON.stringify(props.state.employee.name)}</h2>
            <h2>id: === {JSON.stringify(props.state.employee.id)}</h2>
            <h2>state: === {JSON.stringify(props.state)}</h2>
            <button onClick={setNewstate}>set name</button><br></br>
            <button onClick={setReInit}>re-init</button><br></br>
            <input value={name} onChange={setAddedName}></input>
            <input value={id} onChange={setAddedId}></input><br></br>
            <button onClick={appendEmployee}>Append Employee</button><br></br>
        </div >
    );
}

export default Home;
