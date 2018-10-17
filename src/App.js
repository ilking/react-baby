import React from 'react';
import SidePanel from './components/SidePanel';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panelIsVisible: true
    };
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
        <div className="main-content">Main Content</div>
      </div>
    );
  }
}

export default App;
