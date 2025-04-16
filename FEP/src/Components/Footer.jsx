import React from 'react';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Pawsitive Futures. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;