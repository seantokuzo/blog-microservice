import React from 'react'

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content

    if (comment.status === 'approved') {
      content = comment.content
    }
    if (comment.status === 'pending') {
      content = "Comment awaiting Supreme Leader Musk's approval"
    }
    if (comment.status === 'rejected') {
      content =
        "Supreme Leader Musk rejects your comment. Agents have been dispatched to user's location for re-education enrollment"
    }

    return <li key={comment.id}>{content}</li>
  })

  return <ul>{renderedComments}</ul>
}

export default CommentList
