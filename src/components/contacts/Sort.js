import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortContacts } from '../../actions/contactActions';

class Sort extends Component {
  onSortClick = sortType => {
    this.props.sortContacts(sortType);
  };
  render() {
    return (
      <div>
        <button
          className="btn btn-info mb-3"
          onClick={this.onSortClick.bind(this, 'asc')}
        >
          Sort A-Z
        </button>
        <button
          className="btn btn-info mb-3 ml-3"
          onClick={this.onSortClick.bind(this, 'desc')}
        >
          Sort Z-A
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { sortContacts }
)(Sort);
