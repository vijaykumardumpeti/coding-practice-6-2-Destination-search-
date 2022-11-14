// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {eachObject, key} = this.props

    const {name, imgUrl} = eachObject

    return (
      <li className="list" key={key}>
        <img src={imgUrl} className="image" alt="search icon" />
        <p className="paragraph">{name} </p>
      </li>
    )
  }
}
export default DestinationItem
