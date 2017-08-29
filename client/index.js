import React from 'react'
import ReactDOM from 'react-dom'
import HomeHeader from './components/home-header.js'

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <HomeHeader />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#main')
)
