import React from 'react'
import { connect } from "react-redux";
import { Counter } from "../../components/counter/counter"
import { increment } from "./actions"

function CounterContainer({ counter, increment, ...props }) {

    console.log(props)

    return (<Counter increment={increment} counter={counter} />)

}


function mapStateToProps({ count: { counter } }) {

    return { counter }

}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(increment())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)