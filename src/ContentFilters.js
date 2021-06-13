import React, {Component} from 'react';
import './ContentFilters.scss'

class ContentFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ['Generative', 'Simulation', 'Mathematics', 'Statistics', 'R',
      'Python', 'Processing']
    };
  }

fillFilters() {
  let filts = [];
  for (let i in this.state.filters) {
    let id = this.state.filters[i].toLowerCase();
    filts.push(
      <div key={id}>
        <input type='checkbox' id={id} className='filtercheck' style={{display:"none"}}/>
        <label htmlFor={id}><span className='filtertoken'>{this.state.filters[i]}</span></label>
      </div>
    );
  }
  return (<span className='filtercontainer'>{filts}</span>);
}

  render() {
    return (
        <span className='contentfilters'>
          <h2 className='contentfiltertitle'>
            Content Filters
          </h2>
          <p>{'Select or deselect topics:'}</p>
          {this.fillFilters()}
        </span>
    );
  }
}

export default ContentFilters;
