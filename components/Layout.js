import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { currentDayName } from "../utils/dateUtils";

const menu = [
  {
    path: "/",
    name: "0. start",
  },
  {
    path: "/about",
    name: "1. about",
  },
  {
    path: "/uses",
    name: "2. uses",
  },
];

function Layout({ children, isHomepage, secondaryPage }) {
  const router = useRouter();

  return (
    <>
      <div className="top-menu">
        <ul>
          <li className="logo">
            <Link href="/" as="/">
              deefefokko
            </Link>
          </li>

          {menu.map(({ path, name }) => (
            <li key={name}>
              <Link href={path} as={path}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {!secondaryPage && (
        <div style={{ textAlign: "center" }}>
          <p className="entry-description">
            I write about code, design & life. — Telmo
          </p>
        </div>
      )}
      <div className="mx-auto md:w-10/12 w-10/12">{children}</div>

      {secondaryPage && (
        <div className="bottom-mobile-nav">
          <button
            className="theme-switch-button-mobile"
            onClick={() => switchTheme()}
          >
            fkofekoefofke{" "}
          </button>
        </div>
      )}

      <footer>
        <div>No tracking. No ads. Happy {currentDayName()}!</div>
        <div>&copy; {new Date().getFullYear()}</div>
      </footer>
    </>
  );
}

export default Layout;
