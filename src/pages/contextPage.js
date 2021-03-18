import React, { Component } from 'react';
import { ThemeProvider } from './ThemeContext';
import ContextTypePage from './ContextTypePage';
import ConsumerPage from './ConsumerPage';
import { UserProvider } from './UserContext';
import MultipleContextPage from './MultipleContextPage';

export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: 'red'
      },
      user: {
        name: 'James'
      }
    };
  }

  changeColor = () => {
    const { themeColor } = this.state.theme;

    this.setState({
      theme: {
        themeColor: themeColor === 'red' ? 'green' : 'red'
      }
    });
  };

  render() {
    const { theme, user } = this.state;
    return (
      <div>
        <button onClick={this.changeColor}>change color</button>
        <h3>ContextPage</h3>
        <ThemeProvider value={theme}>
          <ContextTypePage />
          <ConsumerPage />
          <UserProvider value={user}>
            <MultipleContextPage />
          </UserProvider>
        </ThemeProvider>
      </div>
    );
  }
}
