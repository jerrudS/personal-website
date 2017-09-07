import React from 'react'
import ReactDOM from 'react-dom'
import HomeHeader from './components/home-header.js'
import HomeDescription from './components/home-description.js'
import HomeImage from './components/home-image.js'
import ProjectsButton from './components/projects-button.js'
import BaseballButton from './components/baseball-button.js'
import MessageButton from './components/message-button.js'

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <HomeHeader />
        <HomeDescription />
        <HomeImage />
        <ProjectsButton />
        <BaseballButton />
        <MessageButton />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#main')
)
