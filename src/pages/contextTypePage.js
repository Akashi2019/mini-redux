import React, { Component } from 'react';
import { ThemeContext } from './themeContext';

export default class ContextTypePage extends Component {
  static contextType = ThemeContext;
  render() {
    const { themeColor } = this.context;
    return (
      <div className="border">
        <h3 className={themeColor}>ContextTypePage</h3>
      </div>
    );
  }
}
