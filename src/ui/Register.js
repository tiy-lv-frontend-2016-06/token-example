import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { register } from 'api/api';

export default React.createClass({
  getInitialState: function () {
    return {
      username: '',
      password: ''
    }
  },
  handleChange: function(e) {
    var newState = Object.assign({}, this.state);
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  },
  handleSubmit: function(e) {
    e.preventDefault();

    register(this.state.username, this.state.password);
  },
  render: function () {
    return (
      <form id="register" onSubmit={this.handleSubmit}>
        <h1>Register</h1>
        <TextField name="username" value={this.state.username} onChange={this.handleChange} hintText="username" /><br />
        <TextField name="password" value={this.state.password} onChange={this.handleChange} hintText="Password" floatingLabelText="Password" type="password" /><br />
        <RaisedButton type="submit" label="Default" />
      </form>
    )
  }
})