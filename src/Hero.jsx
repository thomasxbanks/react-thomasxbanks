import React, { Component, Fragment } from 'react';

import Body from './Body';
import Columns from './Columns';

import './hero.css';

class Hero extends Component {
  constructor(){
    super()
    this.state={}
  }

  render(){
    const { user } = this.props
    return (
      <Fragment>
        <figure className="hero" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/hero.jpg)` }}>
          <figcaption>
            <h1>
              thomas<span>×</span>banks
            </h1>
          </figcaption>
        </figure>
        <Columns>
          <Body>
            {user.bio}
          </Body>
        </Columns>
      </Fragment>
    );
  }
}

export default Hero;
