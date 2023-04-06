// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    isHead: true,
    totalResult: 0,
    totalHeads: 0,
    totalTails: 0,
  }

  coinTossBtn = () => {
    const getNum = Math.floor(Math.random() * 2)
    if (getNum === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalResult: prevState.totalResult + 1,
        totalHeads: prevState.totalHeads + 1,
      }))
    } else if (getNum === 1) {
      this.setState(prevState => ({
        isHead: false,
        totalResult: prevState.totalResult + 1,
        totalTails: prevState.totalTails + 1,
      }))
    }
  }

  render() {
    const {isHead, totalResult, totalHeads, totalTails} = this.state

    const headOrTailSrcImg = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-cont">
        <div className="card-cont">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={headOrTailSrcImg} className="img" alt="toss result" />
          <button className="button" type="button" onClick={this.coinTossBtn}>
            Toss Coin
          </button>
          <div className="result-cont">
            <p className="total">Total: {totalResult}</p>
            <p className="head">Heads: {totalHeads}</p>
            <p className="tails">Tails: {totalTails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
