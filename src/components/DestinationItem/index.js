// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {eachObject, key} = this.props

    const {name, imgUrl} = eachObject

    return (
      <div key={key}>
        <img src={imgUrl} className="image" alt="avatar" />
        <p className="paragraph">{name} </p>
      </div>
    )
  }
}
export default DestinationItem
