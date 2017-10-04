import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <h1>Jerrud Sabourin</h1>
        <h2>aka Sabercat</h2>
        <ul className="header">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/projects'>Cool Projects</Link></li>
          <li><Link to='/baseball'>My Baseball Career</Link></li>
          <li><Link to='/email'>Email Me</Link></li>
        </ul>
      </nav>
    )
  }
}
