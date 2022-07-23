import React, {useState} from 'react';
import './App.css';
import NewComponent from './components/NewComponent';
import Button from './components/Button';

//вернул коммит
function App() {

    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ]);
    let currentMoney = money;
    const [filter, setFilter] = useState('all');

    if (filter === 'dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'dollar');
    }
    if (filter === 'ruble') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'ruble');
    }

    function onClickFilterAppHandler(nameButton: string) {
        setFilter(nameButton);
    }

    return (
        <div>

            <NewComponent m={currentMoney}/>
            <div style={{marginLeft: '35px'}}>
                <Button callBack={() => onClickFilterAppHandler('all')}/>
                <Button callBack={() => onClickFilterAppHandler('dollar')}/>
                <Button callBack={() => onClickFilterAppHandler('ruble')}/>
            </div>
        </div>);
}

export default App;
