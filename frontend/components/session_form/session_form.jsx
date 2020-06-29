import React from 'react';
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  
  handleDemo(e) {
    e.preventDefault();
    const demoUser = {email:'demo user', password:'123456'};
    this.props.formType === 'signup' 
    ? this.props.loginDemo(demoUser) 
    : this.props.processForm(demoUser);
  }

  renderErrors() {
    return (
      <ul className='errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='session-wrapper'>
        <img className='session-img' src={window.monoURL} />
        <div className='filter'></div>
        <div className="login-form-container">
          <Link to='/'>X</Link>
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
                <label>{this.props.formType === 'signup' ? "create a" : "enter your"} password</label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  />
              </div>
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
          <div className='session-switch'>
            {this.props.formType === 'signup' 
              ? <a href='./#/login'>already have a Pheed? Login</a>
              : <a href='./#/signup'>new to Pheedly? Signup</a>
            }
          </div>
          <form onSubmit={this.handleDemo} className='demo-user-form'>
              <input className="demo-user" type="submit" value="demo login" />
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;
