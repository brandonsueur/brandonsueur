import React, { useState } from "react";
import { Button, SectionTitle } from "@components/index";

import Socials from "@components/Socials";

const INTERESTS = [
  {
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.0625 12.9375H13C13 12.4197 12.5803 12 12.0625 12V12.9375ZM12.0625 21.0625V22C12.5803 22 13 21.5802 13 21.0625H12.0625ZM11.4375 13.875H12.0625V12H11.4375V13.875ZM11.125 12.9375V21.0625H13V12.9375H11.125ZM12.0625 20.125H11.4375V22H12.0625V20.125ZM9.875 18.5625V15.4375H8V18.5625H9.875ZM11.4375 20.125C10.5745 20.125 9.875 19.4255 9.875 18.5625H8C8 20.461 9.53903 22 11.4375 22V20.125ZM11.4375 12C9.53903 12 8 13.539 8 15.4375H9.875C9.875 14.5745 10.5745 13.875 11.4375 13.875V12Z"
          fill="white"
        />
        <path
          d="M20.9375 12.9375V12C20.4197 12 20 12.4197 20 12.9375H20.9375ZM20.9375 21.0625H20C20 21.5802 20.4197 22 20.9375 22V21.0625ZM21.5625 12H20.9375V13.875H21.5625V12ZM20 12.9375V21.0625H21.875V12.9375H20ZM20.9375 22H21.5625V20.125H20.9375V22ZM25 18.5625V15.4375H23.125V18.5625H25ZM21.5625 22C23.461 22 25 20.461 25 18.5625H23.125C23.125 19.4255 22.4255 20.125 21.5625 20.125V22ZM21.5625 13.875C22.4255 13.875 23.125 14.5745 23.125 15.4375H25C25 13.539 23.461 12 21.5625 12V13.875Z"
          fill="white"
        />
        <path
          d="M11.9706 16C11.4346 16 11 16.4477 11 17C11 17.5523 11.4346 18 11.9706 18V16ZM21.0294 18C21.5654 18 22 17.5523 22 17C22 16.4477 21.5654 16 21.0294 16V18ZM11.9706 18H21.0294V16H11.9706V18Z"
          fill="white"
        />
      </svg>
    ),
    label: "Musculation"
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.75 9.75C4.75 8.64543 5.64543 7.75 6.75 7.75H13.25C14.3546 7.75 15.25 8.64543 15.25 9.75V13.25C15.25 13.8023 14.8023 14.25 14.25 14.25H12.3333C12.117 14.25 11.9064 14.1798 11.7333 14.05L10 12.75L8.26667 14.05C8.09357 14.1798 7.88304 14.25 7.66667 14.25H5.75C5.19772 14.25 4.75 13.8023 4.75 13.25V9.75Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 17C10.5 16.5858 10.1642 16.25 9.75 16.25C9.33579 16.25 9 16.5858 9 17H10.5ZM20 4.75C20 4.33579 19.6642 4 19.25 4C18.8358 4 18.5 4.33579 18.5 4.75H20ZM9 17V18.25H10.5V17H9ZM10.75 20H15.25V18.5H10.75V20ZM20 15.25V4.75H18.5V15.25H20ZM15.25 20C17.8734 20 20 17.8734 20 15.25H18.5C18.5 17.0449 17.0449 18.5 15.25 18.5V20ZM9 18.25C9 19.2165 9.7835 20 10.75 20V18.5C10.6119 18.5 10.5 18.3881 10.5 18.25H9Z"
          fill="white"
        />
      </svg>
    ),
    label: "Natation"
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.5 16C7.88071 16 9 14.8807 9 13.5C9 12.1193 7.88071 11 6.5 11C5.11929 11 4 12.1193 4 13.5C4 14.8807 5.11929 16 6.5 16Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 16C18.8807 16 20 14.8807 20 13.5C20 12.1193 18.8807 11 17.5 11C16.1193 11 15 12.1193 15 13.5C15 14.8807 16.1193 16 17.5 16Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.4706 11L15 5H20"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 13H12.3M12.3 13L8.1 7H10.2H6M12.3 13H15"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 19H20"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "VTT"
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.75 13.25V10.25H8.25V11.25C8.25 11.8023 7.80228 12.25 7.25 12.25H5.75C5.19772 12.25 4.75 11.8023 4.75 11.25V5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H7.25C7.80228 4.75 8.25 5.19772 8.25 5.75V6.75H15C15 6.75 19.25 6.75 19.25 11.25C19.25 11.25 17 10.25 14.25 10.25V13.25M10.75 13.25H14.25M10.75 13.25V19.25M14.25 13.25V19.25"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Bricolage"
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 15.4828V9.7931C19 8.95515 18.1355 8.27586 17.069 8.27586H16.7472C16.3574 8.27586 16.0058 8.09171 15.8559 7.80902L15.1441 6.46684C14.9942 6.18415 14.6426 6 14.2528 6H9.74713C9.35735 6 9.0058 6.18415 8.85588 6.46684L8.14412 7.80902C7.9942 8.09171 7.64265 8.27586 7.25287 8.27586H6.93103C5.86455 8.27586 5 8.95515 5 9.7931V15.4828C5 16.3207 5.86455 17 6.93103 17H17.069C18.1355 17 19 16.3207 19 15.4828Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Photographie"
  }
];

const Me = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mb-56 grid grid-cols-1 gap-16 md:grid-cols-12">
      <div className="col-span-5">
        <div
          className="hidden rounded-lg md:block"
          style={{
            height: "615px",
            width: "100%",
            backgroundImage: `url(/moi-full.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <div
          className="hidden items-center justify-center md:flex"
          style={{
            marginTop: "-30px"
          }}>
          <Button>
            <a target="_blank" href="https://www.malt.fr/profile/brandonsueur">
              <div className="mx-4">
                600€ <span className="text-xs font-normal">/ jour</span>
              </div>
            </a>
          </Button>
        </div>
      </div>

      <div className="col-span-7">
        <SectionTitle noMb title="Je suis Brandon Sueur" />

        <div className="relative w-full">
          <p
            style={{ height: showMore ? "100%" : "316px" }}
            className="mt-8 overflow-hidden font-body font-light leading-8 text-blue-gray">
            Mon expertise couvre l'ensemble du processus de conception de
            produits numériques pour les sites web et les applications mobiles,
            y compris la communication visuelle et de marque. J'aime créer de
            nouveaux produits de zéro ou optimiser les produits existants afin
            qu'ils fonctionnent mieux du point de vue de l'utilisateur et de
            l'entreprise.
            <br />
            <br />
            J'aime créer de nouveaux produits de zéro ou optimiser les produits
            existants afin qu'ils fonctionnent mieux du point de vue de
            l'utilisateur et de l'entreprise.
            <br />
            <br />
          </p>

          {showMore && (
            <div>
              <h2 className="mb-6 font-body text-xl text-white">
                Centres d'intérêt
              </h2>

              <div className="mb-8 grid grid-cols-2 gap-8 lg:grid-cols-3">
                {INTERESTS.map(item => (
                  <div className="inline-flex items-center space-x-4">
                    <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-grey-light2 bg-grey-light bg-grey-light">
                      {item.icon}
                    </div>

                    <span className="font-body font-bold text-white">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div
            style={{
              background: showMore
                ? "none"
                : `linear-gradient(to bottom, rgba(17,19,30,0),rgba(17,19,30,0.4), rgba(17,19,30,1))`,
              position: "absolute",
              bottom: "0px",
              padding: "15px 0",
              height: "170px",
              width: "100%"
            }}
          />
        </div>

        {!showMore && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-2 mb-8 text-left font-bold text-white underline opacity-100 transition transition-opacity ease-in-out hover:opacity-80">
            En savoir {showMore ? "moins" : "plus"}
          </button>
        )}

        <div className={`${showMore ? "mt-16" : "mt-4"} flex`}>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Me;
