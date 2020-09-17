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
    this.selectSource = this.selectSource.bind(this)
    this.selection = <ul></ul>
    this.searching = true;
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
    console.log(e.target)
    let source = e.target;
    source.classList.toggle('hover')
  }

  selectPheed(e) {
    let source = e.target;
    var menu = document.querySelector('.pheed-menu')
    menu.classList.toggle('open')
  }

  selectSource(e) {
    var source = JSON.parse(e.target.dataset.source);
    
    this.selection = (
      <ul>
        <li>{source.name}</li>
        <li>{source.code}</li>
        <li>{source.blurb}</li>
      </ul>
    );
    this.searching = false;
    this.render()
    debugger
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
    // debugger
    console.log(this.props.pheeds)
    var newSources = [];
    var pheeds = Object.values(this.props.pheeds)

    if (Boolean(this.props.sources.search)) {
      var matchedSources = Object.values(this.props.sources.search);
      var userSources = Object.values(this.props.sources.userSources).map(source => source.name)
      if (this.searching) newSources = matchedSources.filter(source => !userSources.includes(source.name))
    }


    return (
      <div className='add-source'>
        <form className='source-form'>
          <input type="text" onChange={this.update("source", Date.now())} value={this.state.source}/>
          <input type="submit" onClick={this.handleClick} />
        </form>
        <div className='suggestions' onClick={console.log(this)} >
          <ul>
            <ul className="pheed-menu">
              {pheeds.map((pheed) => (
                <li>{pheed.name}</li>
              ))}
            </ul>
            {
              newSources.map(source => {
                return (
                  // <li className={'new-source} onClick={this.update("source", 0, source.name)} onMouseLeave={this.hover} key={source.name}>
                  <li
                    className={"new-source"}
                    // onClick={this.selectPheed}
                    onClick={this.selectSource}
                    onMouseOver={this.hover}
                    onMouseLeave={this.hover}
                    key={source.name}
                    data-source={JSON.stringify(source)}
                  >
                      {source.name}
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div >{ this.selection }</div>
      </div>
    )
  }
}

export default AddSource;