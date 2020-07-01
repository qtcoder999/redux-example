import React from 'react';

export function Counter({ counter, increment, ...props }) {

    console.log("props", increment)


    return (
        <>
            <h1>Hello Counter : {counter}</h1>
            <button onClick={increment}>Increment</button>
        </>
    )
}