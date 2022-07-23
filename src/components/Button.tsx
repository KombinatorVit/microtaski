import React from 'react';

type ButtonType = {
    callBack: () => void
}

function Button(props: ButtonType) {

    const onClickHandler = () => {
        props.callBack();
    };

    return (
        <div>
            <button onClick={onClickHandler}>all
            </button>
            <button onClick={onClickHandler}>rubles
            </button>
            <button onClick={onClickHandler}>dollars
            </button>
        </div>
    )
        ;
}

export default Button;