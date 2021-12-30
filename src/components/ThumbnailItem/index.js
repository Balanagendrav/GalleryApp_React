// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const onClickThumbnail = () => {
    updateImage(id)
  }
  const activeThumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  return (
    <li className="thumbnail-item">
      <button
        className="thumbnail-btn"
        type="button"
        onClick={onClickThumbnail}
      >
        <img
          className={activeThumbnailClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
