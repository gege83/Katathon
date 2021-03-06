import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Container from './Container';
import Timer from './Timer';
import Headline from './Headline';
import Button from './Button';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  navigateToAbout() {
    this.props.router.push(null, '/about');
  }
  render() {
    console.log(this.props);
    return (
      <Container>
        <Timer/>
        <Headline width='340px'>
          <h2>More Info</h2>
          <p>At katathon.org we are all software developers who seek constant learning.  Our primary aim is to help good developers become awesome developers, while still offering a great platform into the world of software development for the aspiring coder.</p>
          <Link to="/about"><Button buttonType="secondary-button" alignment="left">Find out more...</Button></Link>
        </Headline>
      </Container>
    );
  }
};

export default Home;