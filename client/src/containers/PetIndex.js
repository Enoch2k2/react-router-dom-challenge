import React, { Component } from 'react'
import PetLi from '../components/PetLi';

export class PetIndex extends Component {
  constructor() {
    super();

    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/pets')
    .then(resp => resp.json())
    .then(pets => this.setState({ pets }))
  }

  render() {
    const pets = this.state.pets.map((pet, i) => <PetLi key={i} pet={pet} />);

    return (
      <div>
        <h1>Pet List</h1>
        <ul>
          { pets.length > 0 ? pets : 'loading...' }
        </ul>
      </div>
    )
  }
}

export default PetIndex
