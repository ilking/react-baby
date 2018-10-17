import React from 'react';
import {Container, Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.less';
import Sidebar from 'react-sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  getChildren() {
    return (
    <Container>
      <Row>
        <Col className="main-content col-10">Content</Col>
        
        <Col>
          Hello world
        </Col>
      </Row>
    </Container> 
    );
  }

  render() {
    return (
      <div className="App">
        <Sidebar 
          sidebar={<b>Sidebar content</b>}
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          >
          <Button outline color="info" onClick={() => this.onSetSidebarOpen(true)}>Menu</Button>  
        </Sidebar>
        
      </div>
    );
  }
}

export default App;
