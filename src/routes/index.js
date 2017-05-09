import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import { Header, Container } from 'semantic-ui-react';

import Home from './Home';
import SingleQuestion from './SingleQuestion';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import AddQuestion from './AddQuestion';
import MyQuestions from './MyQuestions';
import requireAuthentication from '../components/Auth';
import getUser from '../components/GetUser';
import NavBar from '../components/NavBar';

export default () => (
  <BrowserRouter>
    <Container>
      <Header as="h1" textAlign="center">
        <Link to="/">Quizzer</Link>
      </Header>
      <Route path="/" render={props => (<NavBar {...props} />)} />
      <Route exact path="/" component={getUser(Home)} />
      <Route path="/view/:questionId" render={props => (<SingleQuestion {...props} />)} />
      <Route path="/login" render={props => (<LoginPage {...props} />)} />
      <Route path="/signup" render={props => (<SignupPage {...props} />)} />
      <Route path="/questions/add" component={requireAuthentication(AddQuestion)} />
      <Route path="/profile/questions" component={requireAuthentication(MyQuestions)} />
    </Container>
  </BrowserRouter>
);
