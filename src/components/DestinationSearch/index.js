// Write your code here

import {Component} from 'react'
import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  searchFunction = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const text = searchInput.toLowerCase()

    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachObject =>
      eachObject.name.toLowerCase().includes(text),
    )

    return (
      <div className="container">
        <div>
          <h1>Destination Search</h1>
          <input
            onChange={this.searchFunction}
            placeholder="Search"
            value={searchInput}
            type="search"
          />
          <img
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </div>

        <ul className="images-container">
          {searchResults.map(eachObject => (
            <DestinationItem key={eachObject.id} eachObject={eachObject} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
