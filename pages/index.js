import React from "react";

function Homepage() {
  return <h1>Welcome to the Homepage!</h1>;
}

Homepage.getInitialProps = () => {
  return {
    blogTitle: "Rookie for life!",
  };
};

export default Homepage;
