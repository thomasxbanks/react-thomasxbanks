import React, { Component, Fragment } from 'react';

import { DataHandler } from './DataHandler';
import * as Helper from './helpers';

import Loading from './Loading';
import Columns from './Columns';
import Column from './Column';
import Code from './icon-code';
import Laptop from './icon-laptop';

class Github extends Component {
  constructor(){
    super()
    this.state = {
      fetchingContent: true
    }
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount(){
    DataHandler()
    .then(response => {
      this.setState({
        fetchingContent: false,
        data: response,
        originaldata: response
      })
    })
  }

  onChange(e){
    let target = e.target.value.toLowerCase()
    const filterableData = this.state.originaldata
    console.log(target)
    this.setState({
      data: (target === 'all') ? this.state.originaldata : filterableData.filter(item => item.name.charAt(0) === target)
    })
  }
  render(){
    const { fetchingContent, data } = this.state
    console.log(this.state)
    return (
      <Fragment>
        <Columns>
          <div className="fancy-select">
            <select 
              className="filter-az" 
              name=""
              onChange={this.onChange}
            >
              <option value="all">All</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
              <option value="I">I</option>
              <option value="J">J</option>
              <option value="K">K</option>
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="N">N</option>
              <option value="O">O</option>
              <option value="P">P</option>
              <option value="Q">Q</option>
              <option value="R">R</option>
              <option value="S">S</option>
              <option value="T">T</option>
              <option value="U">U</option>
              <option value="V">V</option>
              <option value="W">W</option>
              <option value="X">X</option>
              <option value="Y">Y</option>
              <option value="Z">Z</option>
            </select>
          </div>
        </Columns>
        {fetchingContent && <Loading />}
        {!fetchingContent && data.length <= 0 && <Columns>There are no results</Columns>}
        {!fetchingContent && data.length > 0 &&
          <Columns>
            {data.map(datum => (
              <Column key={Helper.salt()}>
                {datum.name && 
                  <header>
                    <h2>{Helper.format(datum.name)}</h2>
                  </header>
                }
                {datum.description && 
                  <div className="content">
                    <p>{datum.description}</p>
                  </div>
                }
                <footer>
                    <a 
                      className="button" 
                      href={datum.html_url}
                      title="View on GitHub" 
                      aria-label="View on GitHub"
                      target="_blank" 
                      rel="nofollow noopener noreferrer"
                    >
                      <Code />
                    </a>
                    {datum.has_pages && 
                      <a 
                        className="button" 
                        href={`https://${datum.owner.login}.github.io/${datum.name}`} 
                        title="View demo" 
                        aria-label="View demo"
                        target="_blank" 
                        rel="nofollow noopener noreferrer"
                      >
                        <Laptop />
                      </a>}
                </footer>
              </Column>
            ))}
          </Columns>
        }
      </Fragment>
    );
  }
  
}

export default Github;
