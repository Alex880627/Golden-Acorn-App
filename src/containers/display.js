import Counter from '../components/Counter';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    count: state.acornReducer.count
  };
};

const Display = connect(
  mapStateToProps
)(Counter);

export default Display;