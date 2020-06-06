import React, { Component } from 'react'

class Posts extends Component {
  render() {
    const postitems = this.state.posts.map(post => (
      <div key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
      <h1>Posts</h1>
        {postitems}
      </div>
    )
  }
}
export default Posts
