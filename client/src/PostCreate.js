import React, { useState } from 'react'
import axios from 'axios'

const PostCreate = () => {
  const [title, setTitle] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    const res = await axios.post('http://posts.com/posts/create', {
      title
    })

    console.log(res)

    setTitle('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default PostCreate
