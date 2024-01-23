import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    const num = Math.round(Math.random() * 100)

    this.setState(prevState => ({count: prevState.count + num}))
  }

  render() {
    const {count} = this.state

    const status = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bgContainer">
        <div className="contentContainer">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {status}</p>
          <button type="button" className="button" onClick={this.increment}>
            increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
