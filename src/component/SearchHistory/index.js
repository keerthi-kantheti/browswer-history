import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class SearchHistory extends Component {
  state = {searchInput: ''}

  onChangeOfSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickDelete = id => {}

  render() {
    const {initialHistoryList} = this.props
    const {searchInput} = this.state
    const reqList = initialHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="search-bar">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="logo-image"
            />
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-image"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search History"
                value={searchInput}
                onChange={this.onChangeOfSearchInput}
              />
            </div>
          </div>
        </div>
        <div className="history-container">
          <ul>
            {reqList.map(eachItem => (
              <HistoryItem
                itemDetails={eachItem}
                key={eachItem.id}
                onClickDelete={this.onClickDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SearchHistory
