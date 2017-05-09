import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestRecentQuestions } from '../../modules/question/actions';

function mapStateToProps(state) {
  return {
    questions: state.questions,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestRecentQuestions,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
