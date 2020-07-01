import { connect } from "react-redux";
import { Counter } from "../../components/counter/counter"


function mapStateToProps({ count: { counter } }) {

    return { counter }

}

function mapDispatchToProps() {


}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)