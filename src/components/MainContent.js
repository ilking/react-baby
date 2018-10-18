import React from 'react';
import {Container, Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.less';
import '../component_styles/MainContent.less';

class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openMenuCaller: this.props.openMenuCaller
    };
  }

  render() {
    return (
      <Container className="main-content">
       <Row>
         <Col className="col-10">Content</Col>
        
         <Col>
            <Button outline color="primary" onClick={this.state.openMenuCaller}>Open Menu</Button>
         </Col>
       </Row>
     </Container> 
     );
  }
}

export default MainContent;