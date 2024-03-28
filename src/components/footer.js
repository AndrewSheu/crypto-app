import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #dee2e6",
    marginTop: "20px"
  };

  return (
    <footer style={footerStyle}>
      <p style={{ margin: "0" }}>This is the footer.</p>
    </footer>
  );
}

export default Footer;
