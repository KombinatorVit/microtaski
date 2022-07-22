import React, {MouseEvent, useState} from 'react';
import './App.css';


function App() {


    let [a, setA] = useState(1,);

    function onclickHandler() {
        setA(++a);
    }

    let [b] = useState(0,);


    function resetHandler() {
        setA(a =b)
    }

    return (
        <div>

            <h1>
                <div>{a}
                    <button onClick={onclickHandler}>number</button>
                </div>

                <div> {b}
                    <button onClick={resetHandler}>number</button>
                </div>
            </h1>
        </div>);

}

export default App;
