import React from 'react';

type topCarsType ={
    manufacturer: string
    model: string
}

type StudentsType = {
    id: number
    name: string
    age: number
}
type NewComponentType = {
    students: Array<StudentsType>
}


export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul>

                {props.students.map((st, i) => {return (
                    <li key={st.id}>{ (i + 1) +' '+ st.name + ' ' +  st.age}</li>
                )})}

            </ul>

        </div>
    );
};

type CarTableType = {
    topCars : Array<topCarsType>
}


export const CarTable = (props: CarTableType ) => {


    return (
        <div>
        {props.topCars.map((car, index) => {
            return (
                <tbody key={index}>
                    <tr>
                        <th>{car.manufacturer}</th>
                    </tr>
                    <tr>
                        <td>{car.model}</td>

                    </tr>
                    <tr>
                        <td>{car.model}</td>
                    </tr>
                </tbody>
            )}) }
        </div>
    )
}

