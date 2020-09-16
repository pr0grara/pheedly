import React from 'react';
import { Redirect } from 'react-router-dom';

class AddSource extends React.Component {
  constructor(props) {
    super(props)
    this.state = {source: ""}
    this.handleClick = this.handleClick.bind(this)
    this.field
    this.debounce = 0;
    this.timer = Date.now();
  }

  update(field, time, source) {
    if (Boolean(source)) {
      return () => this.setState({
          [field]: source,
        });
    }
    // if (time - this.timer > 750) {
    if (time - this.timer > 100) {
      // debugger
      this.props.searchForSources(this.state.source)
      // console.log('too slow')
    }
    // debugger
    this.timer = Date.now();
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  hover(e) {
    // debugger
    console.log(e.target)
    let source = e.target;
    source.classList.toggle('hover')
  }

  autofill(e) {
    // debugger
    // this.state.source = e.currentTarget.value;
    let value
    if (Boolean(e.currentTarget)) {
      value = e.currentTarget.value
      return e => this.setState({
        ["source"]: value
      });
    }
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
    const matchedSources = [];
    if (Boolean(this.props.sources.search)) {
      matchedSources.push(...Object.values(this.props.sources.search))
    }
    // debugger
    return (
      <div className='add-source'>
        <form className='source-form'>
          <input type="text" onChange={this.update("source", Date.now())} value={this.state.source}/>
          <input type="submit" onClick={this.handleClick} />
        </form>
        <div className='suggestions' onMouseOver={this.hover}>
          <ul>
            {
              matchedSources.map(source => {
                return (
                  <li onClick={this.update("source", 0, source.name)} onMouseLeave={this.hover}>
                    {source.name}
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default AddSource;