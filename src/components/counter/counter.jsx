import React from 'react';

export function Counter({ counter, increment, books, ...props }) {
    return (
        <>
            <h1>Hello Counter : {counter}</h1>
            <button onClick={increment}>Increment</button>
            <br />
            <br />
            <br />
            <div>
                {books && books.map((item, index) => {

                    return <div key={index}>{item}</div>


                })}
            </div>
        </>
    )
}