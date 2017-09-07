import React from 'react'
import ReactDOM from 'react-dom'
import HomeHeader from './components/home-header.js'
import HomeDescription from './components/home-description.js'
import HomeImage from './components/home-image.js'

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <HomeHeader />
        <HomeDescription />
        <HomeImage />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#main')
)
