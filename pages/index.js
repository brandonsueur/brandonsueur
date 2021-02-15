import React from "react";
import Link from "next/link";
import Banner from "../components/Banner";

function Homepage(props) {
  return (
    <div className=" container mx-auto ">
      <Banner />

      <h2 className="font-semibold mb-8 tracking-tight text-2xl text-black dark:text-white">
        Mes articles
      </h2>

      <div>
        <a
          className="text-lg text-indigo-600 border-b-2 border-white hover:border-indigo-600"
          href="/"
        >
          Ca c mon premier article de ouf
        </a>
      </div>
    </div>
  );
}

Homepage.getInitialProps = ({ articles }) => {
  return {
    blogTitle: "Rookie for life!",
  };
};

export default Homepage;
