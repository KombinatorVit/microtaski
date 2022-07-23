import React from 'react';

type ButtonType = {
    callBack: () => void
    name: string
}

function Button(props: ButtonType) {

    const onClickHandler = () => {
        props.callBack();
    };

    return (

        <div>
            <button onClick={onClickHandler}> {props.name}
            </button>

        </div>
    )

}

export default Button;