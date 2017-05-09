import React from 'react';
import { Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const QuestionCard = ({ _id, name, history }) => (
  <Card
    centered
    header={name}
    meta="Description"
    description={'Click to Unveil'}
    onClick={() => history.push(`/view/${_id}`)}
    key={_id}
  />
);

QuestionCard.defaultProps = {
  history: {},
};

QuestionCard.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(QuestionCard);
