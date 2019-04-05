import { connect } from 'react-redux';
import { eatOne } from "../actions/actions"
import Button from "../components/Button";

const mapStateToProps = (state) => {  
  return {
    input: state.acornReducer.eat
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    callback: () => {dispatch(eatOne(1))}
  };
};

const Eat = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default Eat;