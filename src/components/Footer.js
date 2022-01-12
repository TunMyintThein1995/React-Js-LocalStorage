import React from 'react';

class Footer extends React.Component {
  render() {
    const getYear = () => {
      const currentYear = new Date().getFullYear();
      return currentYear;
    };
    return (
      <footer className="footer bg-success mt-auto">
        <div className="container">
          <p className="py-2 text-center text-white mb-0">Copyright {getYear()}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
