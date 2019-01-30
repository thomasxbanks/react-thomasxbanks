import React, { Component, Fragment } from 'react';

import Loading from './Loading';
import Hero from './Hero';
import Github from './Github';
import Footer from './Footer';

import { getUser } from './DataHandler';

class App extends Component {
  constructor(){
    super()
    this.state={
      fetchingContent: true,
    }
  }
  componentWillMount(){
    getUser()
    .then(response => {
      this.setState({
        fetchingContent: false,
        user: response,
      })
    })
  }
  render(){
    const { fetchingContent, user } = this.state
    return (
      <Fragment>
        {fetchingContent && <Loading />}
        {!fetchingContent && 
          <Fragment>
            <Hero user={user} />
            <Github />
            <Footer user={user} />
          </Fragment>
        }
      </Fragment>
    );
  }
}

export default App;
