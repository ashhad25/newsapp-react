import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{marginTop: '500px'}}>
        <img src={loading} alt="loading" style={{height: '50px'}}/>
      </div>
    )
  }
}

export default Spinner
