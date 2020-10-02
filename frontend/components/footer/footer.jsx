import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.time = Date.now();
    this.removeHeader = this.removeHeader.bind(this)
  }

  componentDidMount() {
    const footer = document.querySelector('.footer-container')

    document.addEventListener('click', (e) => {
      if (e.target !== footer && footer.classList.length < 2) {
        footer.classList.add('hide');
        footer.children[0].classList.add('hide');
      }
    })

    footer.addEventListener('mouseover', (e) => {
      footer.classList.remove('hide')
      footer.children[0].classList.remove('hide')
    })
  }

  removeHeader() {
    // console.log(Date.now() - this.time)
    // if (Date.now() - this.time < 2000) return
  
    var footer = document.querySelector('.footer');
    footer.classList.add('hide');
    footer.parentElement.classList.add('hide');
    // footer.parentElement.addEventListener('mouseover', (e) => {
    //   footer.parentElement.classList.remove('hide');
    //   footer.classList.remove('hide');
    // })
  }

  render() {
    this.time = Date.now();
    document.addEventListener('scroll', this.removeHeader)
    return (
      <div className="footer-container hide">
        <div className="footer hide">
          <div className='footer-item'>
            <div id='me'>Ara Baghdassarian 2020</div>
            <ul>
              <li><a href="https://mail.google.com/mail/?view=cm&source=mailto&to=azbaghda@gmail.com"> 
                <img src={window.gmail} href="www.gmail.com" />
              </a></li>
              <li><a href="https://github.com/pr0grara"> 
                <img src={window.git} alt="" />
              </a></li>
              <li><a href="https://www.linkedin.com/feed/"> 
                <img src={window.linkedIn} alt="" />
              </a></li>
            </ul>
          </div>
          <div className='footer-item'>
            <span><a href="https://www.feedly.com">A clone of Feedly, check them out :)</a></span>
            <span>
              Icons courtesy of
              <a
                href="https://www.flaticon.com/authors/smashicons"
                title="Smashicons"
              >
                {" "}
                Smashicons
              </a>
              <a href="https://www.flaticon.com/" title="Flaticon"></a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer