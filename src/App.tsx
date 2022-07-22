import React, {MouseEvent} from 'react';
import './App.css';


function App() {

    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello, i am Vit');
    // };
    //
    //
    // const myTwoSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     console.log('Kis Kis');
    // };

    const onClickHandler = (name: string) => {
           console.log(name);

    }



    // const foo1 = () => {
    //     console.log('100200');
    // }
    // const foo2 = (num: number) => {
    //     console.log(`num: ${num}`)
    // }

    return (

        <div className="App">
            {/*<button onClick={(event) => {console.log('Hello');}}>MyYoutubeChanel-1</button>*/}
            <button onClick={() => {onClickHandler('Vit')}}>MyYoutubeChanel-1</button>
            <button name={'vit'} onClick={() => {onClickHandler('Misha')}}> MyYoutubeChanel-2</button>

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={() => {foo2(100200) }}>2</button>*/}
        </div>);

}

export default App;
