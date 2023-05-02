// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {sectionDetails, isActive, setActiveThumbnailId} = props
  const {id, thumbnailUrl, thumbnailAltText} = sectionDetails

  const activeThumbnailClassName = isActive ? 'active' : ''

  const onClickThumbnailImage = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-image-item">
      <button
        className="img-button"
        type="button"
        onClick={onClickThumbnailImage}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-img ${activeThumbnailClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
