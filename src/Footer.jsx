import React, { Component, Fragment } from 'react';

import Moment from 'moment';

import Body from './Body';
import Columns from './Columns';

class Footer extends Component {
  constructor(){
    super()
    this.state={}
  }

  render(){
    const { user } = this.props
    return (
      <Fragment>
        <Columns>
          <Body>
            <small>&copy; {Moment(user['created_at']).format('YYYY')}-{Moment(new Date()).format('YYYY')} {user.company}</small>
          </Body>
        </Columns>
      </Fragment>
    );
  }
}

export default Footer;
