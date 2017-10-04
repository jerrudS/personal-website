import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header.js'
import HomeDescription from './components/home-description.js'
import HomeImage from './components/home-image.js'
import ProjectsButton from './components/projects-button.js'
import BaseballButton from './components/baseball-button.js'
import MessageButton from './components/message-button.js'
import FooterLinks from './components/footer-links.js'
import { BrowserRouter } from 'react-router-dom'

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <HomeDescription />
        <HomeImage />
        <ProjectsButton />
        <BaseballButton />
        <MessageButton />
        <FooterLinks />
      </div>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#main')
)
