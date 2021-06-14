import React, { Component } from 'react'

export class YourCV extends Component {
  render() {
    return (
      <div>
        <div className="cvcontainer infocontainer">
          <h1>Your CV</h1>
          <h2>{this.props.name}</h2>
          <h2>{this.props.address}</h2>
        </div>
      </div>
    )
  }
}

export default YourCV
