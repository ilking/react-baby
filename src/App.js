import React from "react";
import Sidebar from "react-sidebar";
import MainContent from './components/MainContent';
import SidebarContent from './components/SidebarContent';
import './App.less';

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

  render() {
    return (
      <Sidebar
        sidebar={<SidebarContent/>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <MainContent openMenuCaller={() => this.onSetSidebarOpen(true)} />

      </Sidebar>
    );
  }
}

export default App;
