import React from 'react';

type NewComponentType = {
    m: Array<any>
}

const NewComponent = (props:NewComponentType) => {


    return (
        <div>
            <ul>
                {props.m.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknote}</span>
                            <span> {objFromMoneyArr.nominal}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    );
                })}
            </ul>




        </div>
    );
};

export default NewComponent;