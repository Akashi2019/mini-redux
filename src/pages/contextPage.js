import React, { Component } from 'react';
import { ThemeProvider } from './themeContext';
import ContextTypePage from './contextTypePage';

export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: 'red'
      }
    };
  }

  render() {
    const { theme } = this.state;
    return (
      <div>
        <h3>ContextPage</h3>
        <ThemeProvider value={theme}>
          <ContextTypePage />
        </ThemeProvider>
      </div>
    );
  }
}
