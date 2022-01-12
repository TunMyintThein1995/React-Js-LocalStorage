import React from 'react';

class FirstContent extends React.Component {
  render() {
    return (
      <section style={css.content}>
        <p style={css.content_txt}>Welcome My FirstContent</p>
      </section>
    );
  }
}

const css = {
  content: {
    padding: '150px 0',
    margin: '0 30px',
    background: '#ddd',
  },
  content_txt: {
    fontSize: '20px',
    textAlign: 'center',
  }
}

export default FirstContent;
