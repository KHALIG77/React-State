import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class ClassComp extends Component {
  render() {
    return (
      <div>ClassComp</div>
    )
  }
}
 
ClassComp.propTypes = {
    txt:PropTypes.number
}
export default ClassComp