import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    ////debugger
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    //debugger
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.props.formType === "login" 
            ? 
            <>
              <p>Welcome Back.</p>
              <p>Login to access your Pheedly.</p>
            </>
            : 
            <>
              <p>Create an account and</p>
              <p>access your Pheedly everywhere.</p>
            </>
          }
          <br />
          {this.renderErrors()}
          <div className="login-form">
            <div>
              <label>enter your email</label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </div>
            <div>  
              <label>{this.props.formType === 'signup' ? "create a new" : "enter your"} password</label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            </div>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
