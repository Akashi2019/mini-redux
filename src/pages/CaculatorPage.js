import React, { Component } from 'react';
import store from '../store';
import FormCreate from '../components/FormCreate';

const numRules = { required: true, message: '请输入数字！' };
export default FormCreate(
  class CaculatorPage extends Component {
    componentDidMount() {
      store.subscribe(() => {
        this.forceUpdate();
      });
    }
    validate = (callback) => {
      const { validateFields } = this.props;
      validateFields((err, values) => {
        if (err) {
          console.error(err);
        } else {
          callback();
        }
      });
    };
    add = () => {
      this.validate(() => {
        const { getFieldValue } = this.props;
        const num = getFieldValue('num');
        store.dispatch({ type: 'ADD', payload: num - 0 });
      });
    };
    minus = () => {
      this.validate(() => {
        const { getFieldValue } = this.props;
        const num = getFieldValue('num');
        store.dispatch({ type: 'MINUS', payload: num - 0 });
      });
    };

    asyAdd = () => {
      this.validate(() => {
        const { getFieldValue } = this.props;
        const num = getFieldValue('num');
        store.dispatch((dispatch) => {
          setTimeout(() => {
            dispatch({ type: 'ADD', payload: num - 0 });
          }, 1000);
        });
      });
    };

    render() {
      const { getFieldDecorator } = this.props;
      return (
        <div>
          <h3>CaculatorPage</h3>
          <p>{store.getState().count}</p>
          {getFieldDecorator('num', { rules: [numRules] })(
            <input type="text" />
          )}
          <button onClick={this.add}>add</button>
          <button onClick={this.minus}>minus</button>
          <button onClick={this.asyAdd}>asyAdd</button>
        </div>
      );
    }
  }
);
