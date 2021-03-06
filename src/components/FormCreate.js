import React, { Component } from 'react';

export default function FormCreate(Cmp) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { errors: {} };
      this.options = {};
    }
    handleChange = (e) => {
      let { name, value } = e.target;

      this.validate({
        ...this.state,
        [name]: value
      });
    };
    getFieldDecorator = (field, option) => {
      this.options[field] = option;
      return (InputCmp) => {
        return (
          <div>
            {React.cloneElement(InputCmp, {
              name: field,
              value: this.state[field] || '',
              onChange: this.handleChange
            })}
            <p className="red">{this.state.errors[field]}</p>
          </div>
        );
      };
    };
    getFieldsValue = () => {
      return { ...this.state };
    };
    getFieldValue = (field) => {
      return this.state[field];
    };
    validate = (state, afterSetState) => {
      const errors = {};
      for (let name in this.options) {
        if (state[name] === undefined) {
          errors[name] = this.options[name].rules[0].message; //"error";
        }
      }
      this.setState({ ...state, errors }, afterSetState);
    };
    validateFields = (callback) => {
      const state = { ...this.state };
      this.validate(state, () => {
        const { errors } = this.state;
        if (JSON.stringify(errors) === '{}') {
          callback(undefined, state);
        } else {
          callback(errors, state);
        }
      });
    };
    render() {
      return (
        <div className="border">
          <Cmp
            getFieldDecorator={this.getFieldDecorator}
            getFieldsValue={this.getFieldsValue}
            getFieldValue={this.getFieldValue}
            validateFields={this.validateFields}
          />
        </div>
      );
    }
  };
}
