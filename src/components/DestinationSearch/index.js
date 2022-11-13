// Write your code here

import {Component} from 'react'
import './index.css'

import DestinationItem from './components/DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  searchFunction = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachObject =>
      eachObject.name.includes(searchInput),
    )

    return (
      <div>
        <h1>Destination Search</h1>
        <input
          onChange={this.searchFunction}
          placeholder="Search"
          value={searchInput}
        />

        <div className="images-container">
          {searchResults.map(eachObject => (
            <DestinationItem key={eachObject.id} eachObject={eachObject} />
          ))}
        </div>
      </div>
    )
  }
}

export default DestinationSearch
