import React, {MouseEvent} from 'react';
import './App.css';
import Button from './components/Button';


function App() {


    function Button1Foo(nameSubs: string, age: number, addres:string) {
        console.log(nameSubs + age, 'city - ' + addres);
    }

    function Button2Foo(nameSubs:string, age:number) {
        console.log(nameSubs + age);

    }


    function ButtonConsolTypping() {
        console.log('i AM typping button')
    }

    return (

        <div className="App">
        <Button title={'MyYoutubeChanel-1'} callBack={()=>{Button1Foo('AAA', 21, 'Dnipro')}}/>
            <Button title={'MyYoutubeChanel-2'} callBack={() => {Button2Foo('bbbbb', 28)}}/>
<Button title={'I am typping button'} callBack={ButtonConsolTypping}/>

        </div>);

}

export default App;
