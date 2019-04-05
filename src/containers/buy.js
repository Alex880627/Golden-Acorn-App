import { connect } from 'react-redux';
import  { buyOne } from "../actions/actions"
import Button from "../components/Button";

const mapStateToProps = (state) => {
  return {
    input: state.acornReducer.buy
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    callback: () => {dispatch(buyOne(1))}
  };
};

const Buy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default Buy;