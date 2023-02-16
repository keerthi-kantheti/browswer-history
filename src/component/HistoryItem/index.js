import './index.css'

const HistoryItem = props => {
  const {itemDetails, onClickDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = itemDetails

  const onDelete = () => {
    onClickDelete(id)
  }
  return (
    <li className="list-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="domain-container">
        <img src={logoUrl} alt="domain logo" className="history-item-logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="delete-button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
