import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div id='footer'>
      Icons made by<a href = "https://www.flaticon.com/authors/smashicons" title = "Smashicons" > Smashicons</a >@<a href = "https://www.flaticon.com/" title = "Flaticon" > www.flaticon.com</a >
    </div>
    )
  }
}

export default Footer