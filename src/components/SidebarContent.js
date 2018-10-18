import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.less';
import '../component_styles/SidebarContent.less'

class SidebarContent extends React.Component {
  render() {
    return (
      <Container className="sidebar-content">
        <Row>
          <Col className="col-12">
            <ul>
              <li>Thing 1</li>
              <li>Thing 2</li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SidebarContent;