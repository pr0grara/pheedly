import React from 'react';
import { Redirect } from 'react-router-dom';

class AddSource extends React.Component {
  constructor(props) {
    super(props)
    this.state = {source: ""}
    this.handleClick = this.handleClick.bind(this)
    this.field
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleClick(e) {
    e.preventDefault()
    this.props.addUserFeed(this.props.user, this.state.source) //now that this works
    //make sure to update sources in state and localstorage, refresh all articles this time 
    //including ones from new source, add these articles to state and localStorage
    //and then redirect back to '/home'
    console.log(':)')
  }

  render() {
    //debugger
    return (
      <form className='source-form'>
        <input type="text" onChange={this.update("source")} value={this.state.source}/>
        <input type="submit" onClick={this.handleClick} />
      </form>
    )
  }
}

export default AddSource;