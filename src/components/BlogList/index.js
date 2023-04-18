// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="list-container">
      {blogsList.map(eachUser => (
        <BlogItem initialHistory={eachUser} key={eachUser.id} />
      ))}
    </ul>
  )
}
export default BlogList
