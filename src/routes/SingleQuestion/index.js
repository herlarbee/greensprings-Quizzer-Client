import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestQuestion } from '../../modules/question/actions';

function mapStateToProps(state) {
  return {
    currQuestion: state.currQuestion,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestQuestion,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
