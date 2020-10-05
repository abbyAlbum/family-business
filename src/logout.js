import React, { Component } from "react";

const Logout = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
};

export default Logout;
