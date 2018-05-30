import { connect } from 'react-redux';
import { incrementCount } from '../../actions/creators';

const mapStateToProps = function(state) {
  return {
    count : state.app.count
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    incrementCount : () => dispatch(incrementCount())
  };
};

export default connect(mapStateToProps, mapDispatchToProps);