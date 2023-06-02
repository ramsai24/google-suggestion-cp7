// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    // const {searchInput} = this.state

    // const {suggestionsList} = this.props

    const values = event.target.value
    console.log(values)

    this.setState({searchInput: values})
  }

  onArrowClick = (id, suggestion) => {
    console.log(id)
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    console.log(suggestionsList)

    const {searchInput} = this.state

    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="bg-container">
          <img
            className="google-img"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="bg-search-container">
            <div className="search-suggestions-container">
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                  alt="search icon"
                  className="search-logo"
                />
                <input
                  className="inputEl"
                  type="search"
                  placeholder="Search Google"
                  onChange={this.onSearch}
                  value={searchInput}
                />
              </div>
              <ul className="suggestion-container">
                {searchResult.map(each => {
                  console.log(each.id)

                  return (
                    <SuggestionItem
                      key={each.id}
                      suggestionListItem={each}
                      arrow={this.onArrowClick}
                    />
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
