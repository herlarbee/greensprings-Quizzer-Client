import React, { Component } from 'react';
import { Header, Segment, Button, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class SingleQuestion extends Component {
  constructor(props){
    super(props);
    this.state = {
      answer: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.requestQuestion(this.props.match.params.questionId);
  }

  handleSubmit = (e) => {

  }

  render() {
    const question = this.props.currQuestion;
    if (!Object.prototype.hasOwnProperty.call(question, 'name')) {
      return (<p>Loading...</p>);
    }

    return (
      <div>
        <Header as="h1" textAlign="center" >{question.name}</Header>
        <Container text>
          {question.questionBody}
          { /* eslint-enable */ }
        </Container>
        <Button.Group vertical>
          { /* eslint-disable */ }
          {question.questionOptions.split(',').map((option, i) => 
            <Button id={i} center fluid size='large' color='blue' 
             onClick= {()=>{
              const answer = document.getElementById(i).textContent;
              this.setState({ answer });
             }} key={i}> {option} </Button>) }
    </Button.Group>
        <Segment.Group>
          { /* eslint-disable */ }
          <Button  fluid size='large' color='green' >Submit</Button>)}
        </Segment.Group>
      </div>
    );
  }
}

SingleQuestion.defaultProps = {
  requestQuestion: () => ({}),
  currQuestion: {},
};

SingleQuestion.propTypes = {
  requestQuestion: PropTypes.func,
  currQuestion: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    questionBody: PropTypes.string.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      questionId: PropTypes.string,
    }),
  }).isRequired,
};

