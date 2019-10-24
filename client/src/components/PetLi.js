import React, { Component } from 'react'

// BONUS: If you are doing the bonus, create the name here as a link that will direct the user to this pet's show page, do take note that this.props.pet is a object from the rails database, so it does have an id attached.

export class PetLi extends Component {
  render() {
    return (
      <li>
        { this.props.pet.name }
      </li>
    )
  }
}

export default PetLi
