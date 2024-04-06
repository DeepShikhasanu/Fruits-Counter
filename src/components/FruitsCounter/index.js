// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananaCount: 0,
  }

  onMangoesIncrease = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  onBananaIncrease = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoesCount, bananaCount} = this.state

    return (
      <div className="bg-container">
        <div className="fruits-card">
          <h1 className="fruits-title">
            Bob ate <span className="counter">{mangoesCount}</span> mangoes{' '}
            <span className="counter">{bananaCount}</span> bananas
          </h1>
          <div className="counter-control-container">
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onMangoesIncrease}
              >
                Eat Mango
              </button>
            </div>
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onBananaIncrease}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
