import React from 'react';
import {Container, Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.less';
import '../component_styles/HeaderBar.less';

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenuCaller: this.props.openMenuCaller
    };
  }

  render() {
    return (
      <Container className="header-bar">
        <Row>
          <Col className="col-10 title-col">
            <span className="title">Baby Tracker</span>
          </Col>
        
          <Col className="button-col">
            <Button outline color="primary" onClick={this.state.openMenuCaller}>
              Menu
            </Button>
         </Col>
        </Row>
      </Container> 
     );
  }
}

export default HeaderBar;