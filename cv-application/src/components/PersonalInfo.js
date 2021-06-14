import React, { Component } from 'react'

export class PersonalInfo extends Component {

  render() {
    return (
      <div>
        <div className="personalinfocontainer infocontainer">
        <label htmlFor="personalinformation">Personal Information</label>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" placeholder="Name" name="name" value={this.props.name} className="mg-1"  onChange={this.props.handleChange} />
          <input type="text" placeholder="Address" name="address" value={this.props.address} className="mg-1" onChange={this.props.handleChange}/>
          <input type="text" placeholder="Phone Number" className="mg-1"/>
          <input type="text" placeholder="Email" className="mg-1"/>
          <input type="submit" value="Submit" />
        </form>
        </div>
      </div>
    )
  }
}

export default PersonalInfo

