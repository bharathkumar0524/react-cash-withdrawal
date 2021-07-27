// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  denominationValue = value => {
    this.setState(each => ({
      cash: each.cash - value,
    }))
  }

  render() {
    const {cash} = this.state
    const {denominationsList} = this.props
    return (
      <div className="cash-withdrawal-bg-container">
        <div className="cash-withdrawal-container">
          <div className="name-container">
            <p className="initial-letter">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <div>
              <h1 className="balance-heading">Your Balance</h1>
            </div>
            <div>
              <h1 className="cash">{cash}</h1>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <div>
            <h1 className="cash">Withdraw</h1>
            <p className="rupees">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination">
              {denominationsList.map(each => (
                <DenominationItem
                  sum={each}
                  key={each.id}
                  denominationValue={this.denominationValue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
