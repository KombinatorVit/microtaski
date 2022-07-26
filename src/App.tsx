import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {Input} from './components/Input';


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

    let [title, setTitle] = useState('');


    const addInputValue = (title: string) => {
        let newMessage = {message: title};

        const newMessages = [newMessage, ...message];
        setMessage(newMessages);

        // или вариант Игоря
        //         let newMessage = {message: title}
        // setMessage([...message, newMessage] )
    };

    const callBackButtonHandler = () => {
        addInputValue(title)
        setTitle('')
    };

    return (
        <div className={'App'}>
            {/*<FullInput addInputValue={addInputValue}/>*/}
            <div>
                <Input setTitle={setTitle} title={title}/>
                <Button name={'+'} callback={callBackButtonHandler}/>
            </div>

            {message.map((el, index) => {
                return (
                    <div key={index}> {el.message}</div>);
            })}

        </div>

    );
}

export default App;
