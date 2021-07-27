// Write your code here
import './index.css'

const DenominationItem = props => {
  const {sum, denominationValue} = props
  const {value} = sum
  const onClickValue = () => {
    denominationValue(value)
  }
  return (
    <li>
      <button className="button" type="button" onClick={onClickValue}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
