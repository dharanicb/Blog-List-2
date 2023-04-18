// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {initialHistory} = props
  const {title, description, publishedDate} = initialHistory

  return (
    <li className="list-item-container">
      <div className="flex-item-container">
        <h1 className="tittle">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}
export default BlogItem
