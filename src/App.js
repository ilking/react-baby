import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import SidePanel from './components/SidePanel';
import OpenMenuButton from './components/OpenMenuButton';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.renderSidePanel = this.renderSidePanel.bind(this);

    this.state = {
      panelIsVisible: false
    };
  }

  handleMenuToggle(value) {
    this.setState({panelIsVisible: value});
  }

  renderSidePanel(text) {
    return (
      <SidePanel text={text} isVisible={this.state.panelIsVisible} />
    )
  }

  render() {
    return (
      <div className="App">
        {this.renderSidePanel('Hello World')}
        <Container>
          <Row>
            <Col className="main-content col-10">Content</Col>
            
            <Col>
              <OpenMenuButton onMenuToggle={this.handleMenuToggle} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
