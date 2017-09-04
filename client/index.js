import React from 'react'
import ReactDOM from 'react-dom'
import HomeHeader from './components/home-header.js'
import HomeDescription from './components/home-description.js'

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <HomeHeader />
        <HomeDescription />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#main')
)
