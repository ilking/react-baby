import React from 'react';
// import {Container, Row, Col, Button } from 'reactstrap';
import HeaderBar from './HeaderBar';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.less';
import '../component_styles/MainContent.less';

class MainContent extends React.Component {
  render() {
    return (
      <HeaderBar openMenuCaller={this.props.openMenuCaller} />
      
     );
  }
}

export default MainContent;