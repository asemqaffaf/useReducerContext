import {useContext} from 'react'
import {WaedContext} from '../hooks/waedContext'
import {REEM} from '../hooks/actions'

function ContactUs() {

const {state, dispatch}=useContext(WaedContext);

const handelClick=()=>{
    dispatch({type:REEM})
}
    return (
        <div style={{ background: 'coral', height: '90vh' }}>
            <h1>ContactUs</h1>
            <p>{JSON.stringify(state)}</p>
            <button onClick={handelClick}>Change Name</button>
        </div>
    );
}

export default ContactUs;
