import React, { Component } from 'react'

class Postform extends Component {

  state = {
    title: '',
    body: ''
  }
  onChange(e) {
    if (e.target.name === 'title') {
      this.setState({ title: e.target.value })
    } else {
      this.setState({ body: e.target.value })
    }
  }
  async onSubmit(e) {
    e.preventDefault()
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    const postingdata = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    const postingResponse = await postingdata.json()
    console.log(postingResponse)

  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="">
            <label htmlFor="">Tilte:</label>
            <input type="text" name="title" onChange={this.onChange.bind(this)} value={this.state.title} />
          </div>
          <br />
          <div className="">
            <label htmlFor="">Body:</label>
            <textarea type="text" name="body" onChange={this.onChange.bind(this)} value={this.state.body} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default Postform
