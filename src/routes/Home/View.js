import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import QuestionList from '../../components/QuestionList';

export default class Home extends Component {

  componentWillMount() {
    this.props.requestRecentQuestions({
      query: { $sort: { createdAt: -1 } },
    });
  }

  render() {
    return (
      <div>
        <Divider />
        <QuestionList questions={this.props.questions} />
      </div>
    );
  }
}

Home.defaultProps = {
  requestRecentQuestions: () => ({}),
  questions: [],
};

Home.propTypes = {
  requestRecentQuestions: PropTypes.func,
  questions: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    questionBody: PropTypes.string.isRequired,
  })),
};
