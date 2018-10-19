import React from 'react';
// import {Container, Row, Col, Button } from 'reactstrap';
import HeaderBar from './HeaderBar';
import ChartContent from './ChartContent';
import '../component_styles/MainContent.less';

class MainContent extends React.Component {
  render() {
    return (
      <div className="main-body-content">
        <HeaderBar openMenuCaller={this.props.openMenuCaller} />
        <ChartContent />
      </div>
     );
  }
}

export default MainContent;