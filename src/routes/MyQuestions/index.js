import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestMyQuestions } from '../../modules/question/actions';

function mapStateToProps(state) {
  return {
    myQuestions: state.myQuestions,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestMyQuestions,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
