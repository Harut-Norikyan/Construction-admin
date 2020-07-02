import React, { Component } from 'react';

class Input extends Component {
  render() {
    const {
      input, label, type, meta: { touched, error, warning }
    } = this.props;
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} />
          {touched && error ? <span>{error}</span> : null}
          {touched && warning ? <span>{warning}</span> : null}
        </div>
      </div>
    );
  }
}

export default Input;
