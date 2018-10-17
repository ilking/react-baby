import React from 'react';
import Dock from 'react-dock';

class SidePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
      text: this.props.text
    };
  }

  getChildren(props) {
    return (
      <div className="side-panel-inner">{this.state.text}</div>
    );
  }

  render() {
    return (
      <Dock 
        position='right' 
        isVisible={this.state.isVisible}
        fluid={true}
        className='dock-panel'>{this.state.text}</Dock>
    );
  };
}

export default SidePanel;