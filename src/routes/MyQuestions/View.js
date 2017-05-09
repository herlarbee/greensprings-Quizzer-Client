import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QuestionList from '../../components/QuestionList';

export default class MyQuestions extends Component {

  componentWillMount() {
    /* eslint-disable */
    this.props.requestMyQuestions({
      query: {
        ownerId: this.props.user._id,
      },
    });
    /* eslint-enable */
  }

  render() {
    return (
      <QuestionList questions={this.props.myQuestions} />
    );
  }
}

MyQuestions.defaultProps = {
  requestMyQuestions: () => ({}),
  user: {},
  myQuestions: [],
};

MyQuestions.propTypes = {
  requestMyQuestions: PropTypes.func,
  user: PropTypes.shape({
    _id: PropTypes.string,
    email: PropTypes.string,
  }),
  myQuestions: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    questionBody: PropTypes.string.isRequired,
  })),
};
