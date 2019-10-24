import React, { Component } from 'react'

export class PetNew extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    let pet = this.state;

    fetch('http://localhost:3001/pets', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pet })
    })
    .then(resp => resp.json())
    .then(pet => {
      console.log('pet created', pet) //
      // TODO: redirect to /pets here
    })
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <h1>Create Pet</h1>
        <div className="input-field">
          <input type="text" name="name" id="name" value={this.state.name} onChange={ this.handleChange } />
          <label htmlFor="name">Name</label>
        </div>

        <input type="submit" value="Create Pet" className="btn" />
      </form>
    )
  }
}

export default PetNew
