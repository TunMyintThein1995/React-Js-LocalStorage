import React from 'react'

const Child = (props) => {

  const onTrigger = (event) => {
    props.parentCallback(event.target.name.value);
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onTrigger}>
        <input type="text" name="name" placeholder="Enter Name" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Child;