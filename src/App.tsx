import React, {useState} from 'react';
import './App.css';
import {FullInput} from './components/FullInput';


//вернул коммит
function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    );


    const addInputValue = (title: string) =>{
        let newMessage = {message: title}

        const  newMessages = [newMessage, ...message]
        setMessage(newMessages)

        // или вариант Игоря
            //         let newMessage = {message: title}
        // setMessage([...message, newMessage] )
    }


    return (
        <div className={'App'}>
            <FullInput addInputValue={addInputValue}/>

            {message.map((el, index) => {
                return (
                    <div key={index}> {el.message}</div>);
            })}

        </div>

    );
}

export default App;
