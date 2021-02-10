import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

function Homepage(props) {
  console.log(props);

  return (
    <div className="">
      <h1>Welcome to the Homepage!</h1>
      <img
        width={130}
        src="https://brandonsueur.fr/the-most-beautiful-person-its-me.jpg"
        className="mt-12 rounded-full block mb-8 border-4 p-1 border-indigo-500 dark:border-yellow-300"
      />
    </div>
  );
}

Homepage.getInitialProps = ({ articles }) => {
  return {
    blogTitle: "Rookie for life!",
  };
};

export default Homepage;
