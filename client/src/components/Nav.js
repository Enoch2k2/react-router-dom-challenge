import React, { Component } from 'react'

/*
 TODO: import Link from react-router-dom and change our a tags to Links, remember that Link uses to= instead of href

 Pet Shop will go to the / route
 Create Pet will go to /pets/new
 List Pets will go to /pets
*/

export class Nav extends Component {
  render() {
    return (
      <nav className="blue darken-2">
        <div className="container">
          <a href="#" className="brand-logo">Pet Shop</a>
          <ul className="right">
            <li><a href="#">Create Pet</a></li>
            <li><a href="#">List Pets</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
