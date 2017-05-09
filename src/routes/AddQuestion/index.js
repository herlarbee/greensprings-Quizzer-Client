import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestCreateQuestion } from '../../modules/question/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestCreateQuestion,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
