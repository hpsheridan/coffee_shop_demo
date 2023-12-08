import React from 'react';
import './AgeGate.css';
import { useState } from 'react';

//Age gate - in this case just a question is asked: "Do you like Coffee?"
function AgeGate() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal); //just invert whatever it is now

    }

    //if the user selects "No", print message
    const [message, setMessage] = useState(false);
    const sendMessage = () => {
        setMessage(<p>Sorry, you are not allowed on this site!</p>);
    }

    return (
        <>
            {!modal && (<div className='modal'>
                <div className='overlay'>
                    <div className='modal-content'>
                        <p className='agequestion'>Are you interested in Coffee?</p>
                        <p className="agemessage">{message}</p>
                        <button className='close-modal' onClick={toggleModal}>Yes</button>
                        <button className='open-modal' onClick={sendMessage}>No</button>
                    </div>
                </div>
            </div>)}
        </>
    );
}

export default AgeGate
