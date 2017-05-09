import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import QuestionCard from './QuestionCard';

const QuestionList = ({ questions }) => (
  <Card.Group itemsPerRow={5}>
    {questions.map(question => QuestionCard(question))}
  </Card.Group>
);

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default QuestionList;
