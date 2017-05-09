import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class AddQuestion extends Component {

  constructor(props) {
    super(props);
    this.state = { nameError: false, error: false, name: '', QuestionOption: '', questionBody: '' };
  }

  handleSubmit = (e) => {
    const name = this.state.name.trim();
    if (name === '') {
      this.setState({ nameError: true, error: true });
    } else {
      this.props.requestCreateQuestion({
        redirect: id => this.props.history.push(`/view/${id}`),
        data: {
          name,
          questionBody: this.state.questionBody,
          questionOptions: this.state.questionOptions,
        },
      });
    }
    e.preventDefault();
  }

  handleQuestionBodyChange = (e) => {
    this.setState({ questionBody: e.target.value });
  }

  handleQuestionOptionChange = (e) => {
    this.setState({ questionOptions: e.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} error={this.state.error}>
        <Form.Field error={this.state.nameError} >
          <label>Question Name</label>
          <input value={this.state.name} name="name" onChange={e => this.setState({ name: e.target.value })} placeholder="Question Name" />
        </Form.Field>
        <Form.Field>
          <label>QuestionOptions (seperate each option by a comma )</label>
          <Form.TextArea value={this.state.questionOptions} name="questionOptions" onChange={this.handleQuestionOptionChange} placeholder="QuestionOptions..." />
        </Form.Field>
        <Form.Field>
          <label>QuestionBody</label>
          <Form.TextArea value={this.state.questionBody} name="questionBody" onChange={this.handleQuestionBodyChange} placeholder="QuestionBody..." />
        </Form.Field>
        <Message
          error
          header="Error"
          content="Question name is required"
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

AddQuestion.defaultProps = {
  requestCreateQuestion: () => ({}),
};

AddQuestion.propTypes = {
  requestCreateQuestion: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
