// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionListItem, arrow} = props
  console.log(suggestionListItem)
  const {id, suggestion} = suggestionListItem

  const onArrow = () => {
    console.log('arrow triggered')
    arrow(id, suggestion)
  }

  return (
    <li className="suggestion-item-container">
      <p>{suggestion}</p>
      <button type="button" className="arrow-btn" onClick={onArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-logo"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
