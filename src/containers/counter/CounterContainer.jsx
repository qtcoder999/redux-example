import React from 'react'
import { connect } from "react-redux";
import { Counter } from "../../components/counter/counter"
import { increment } from "./actions"

function CounterContainer({ counter, increment, books, ...props }) {
    return (<Counter increment={increment} counter={counter} books={books} />)

}


function mapStateToProps(state) {


    const { count: { counter } } = state;
    const { books: { books } } = state;

    return { counter, books }

}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(increment())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)