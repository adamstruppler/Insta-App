import React from 'react'

const Form = () => {
  return (
    <div>
      <form>
      <label>Insert new post</label>
      <input type='text' onChange={this.updateTitle} />

      <label>Insert Photo</label>
      <input type='text' onChange={this.updateImg} />

      <label>Insert a Caption</label>
      <input type='text' onChange={this.updateCaption} />
      </form>
    </div>
  )
}

export default Form
