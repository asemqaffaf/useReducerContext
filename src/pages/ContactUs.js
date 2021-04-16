import {useContext} from 'react'
import {userContext} from '../hooks/userContext'
import {REEM} from '../hooks/actions'

function ContactUs() {

const {state, dispatch}=useContext(userContext);

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
