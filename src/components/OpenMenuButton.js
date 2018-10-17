import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../component_styles/OpenMenuButton.css'

class OpenMenuButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onMenuToggle(e.target.value);
  }

  render() {
    const isMenuOpen = this.props.isMenuOpen;

    return (
      <Button color="primary" 
              size="sm" 
              outline 
              className="open-menu" 
              onClick={this.handleChange}>{isMenuOpen ? 'X' : 'Menu'}</Button>
    )
  }
}

export default OpenMenuButton;
