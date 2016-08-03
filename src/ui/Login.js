import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { login } from 'api/api';

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

    login(this.state.username, this.state.password);
  },
  render: function () {
    return (
      <form id="login" onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <TextField name="username" value={this.state.username} onChange={this.handleChange} hintText="username" /><br />
        <TextField name="password" value={this.state.password} onChange={this.handleChange} hintText="Password" floatingLabelText="Password" type="password" /><br />
        <RaisedButton type="submit" label="Default" />
      </form>
    )
  }
})