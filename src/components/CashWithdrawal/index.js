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

  getFirstCharOfName = name => name.slice(0, 1)

  render() {
    const {cash} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = this.getFirstCharOfName(name)
    return (
      <div className="cash-withdrawal-bg-container">
        <div className="cash-withdrawal-container">
          <div className="name-container">
            <p className="initial-letter">{initial}</p>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <p className="cash">
              {cash}
              <br />
              <span className="rupees">In Rupees</span>
            </p>
          </div>
          <div>
            <p className="cash">Withdraw</p>
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
