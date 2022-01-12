import React from 'react';

function SecondContent() {
  return (
    <div className="bg-primary py-5" >
      <div className="container">
        <h2 className="text-center">Welcome from Movies list...</h2>
        <Lists />
      </div>
    </div>
  )
}

function Lists() {
  let lists = ['Mone Swal', 'ME', 'Nga Duu', 'Mystery Of Burma', 'Phoe Shate', 'Mudras Calling', 'Deception'];
  return (
    <ul>
      {lists.map((i) => <Item key={i} name={i} />)}
    </ul>
  );
}

function Item(props) {
  return (
    <li className="text-light">{props.name}</li>
  )
}

export default SecondContent;
