import React from "react";
import { SectionTitle } from "@components/index";

const ITEMS = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="inline w-[22px]"
        viewBox="0 0 26 26">
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16.501 5.668 3.831 3.83-3.83-3.83Zm1.625-1.625a2.709 2.709 0 0 1 3.831 3.83L7.042 22.79H3.25v-3.87L18.126 4.043v0Z"
        />
      </svg>
    ),
    label: "Conception",
    description:
      "Mes créations incarnent l'essence de votre marque pour rehausser votre représentation numérique. Je suis bien familiarisé avec la création d'une expérience utilisateur améliorée avec des interfaces impressionnantes assorties."
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.5625 18.4167L9.75 21.6667L8.66667 22.75H17.3333L16.25 21.6667L15.4375 18.4167H10.5625ZM3.25 14.0833H22.75H3.25ZM5.41667 18.4167H20.5833C21.158 18.4167 21.7091 18.1884 22.1154 17.7821C22.5217 17.3757 22.75 16.8246 22.75 16.25V5.41667C22.75 4.84203 22.5217 4.29093 22.1154 3.8846C21.7091 3.47827 21.158 3.25 20.5833 3.25H5.41667C4.84203 3.25 4.29093 3.47827 3.8846 3.8846C3.47827 4.29093 3.25 4.84203 3.25 5.41667V16.25C3.25 16.8246 3.47827 17.3757 3.8846 17.7821C4.29093 18.1884 4.84203 18.4167 5.41667 18.4167Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Développement",
    description:
      "Je me suis spécialisé sur le développement web et mobile en utilisant React.js, React Native et Expo. Je crée des sites web et des applications mobile avec une expérience utilisateur engageante."
  },
  {
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.8943 6.10567L16.0637 9.93633L19.8943 6.10567ZM16.0637 16.0637L19.8943 19.8943L16.0637 16.0637ZM9.93633 9.93633L6.10567 6.10567L9.93633 9.93633ZM9.93633 16.0637L6.10567 19.8943L9.93633 16.0637ZM22.75 13C22.75 14.2804 22.4978 15.5482 22.0078 16.7312C21.5178 17.9141 20.7997 18.9889 19.8943 19.8943C18.9889 20.7997 17.9141 21.5178 16.7312 22.0078C15.5482 22.4978 14.2804 22.75 13 22.75C11.7196 22.75 10.4518 22.4978 9.26884 22.0078C8.08591 21.5178 7.01108 20.7997 6.10571 19.8943C5.20034 18.9889 4.48216 17.9141 3.99217 16.7312C3.50219 15.5482 3.25 14.2804 3.25 13C3.25 10.4141 4.27723 7.93419 6.10571 6.10571C7.93419 4.27723 10.4141 3.25 13 3.25C15.5859 3.25 18.0658 4.27723 19.8943 6.10571C21.7228 7.93419 22.75 10.4141 22.75 13ZM17.3333 13C17.3333 14.1493 16.8768 15.2515 16.0641 16.0641C15.2515 16.8768 14.1493 17.3333 13 17.3333C11.8507 17.3333 10.7485 16.8768 9.93587 16.0641C9.12321 15.2515 8.66667 14.1493 8.66667 13C8.66667 11.8507 9.12321 10.7485 9.93587 9.93587C10.7485 9.12321 11.8507 8.66667 13 8.66667C14.1493 8.66667 15.2515 9.12321 16.0641 9.93587C16.8768 10.7485 17.3333 11.8507 17.3333 13V13Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Soutien",
    description:
      "Combler une lacune de compétences dans votre équipe de développement existante, maintenir le code ou consulter vos besoins numériques. Je fournis une gamme de services d'assistance pour vous garder au-dessus du bord."
  }
];

const Services = () => {
  return (
    <div>
      <SectionTitle
        id="services"
        title="Prestations de service"
        paragraph="Nécessaire pour une entreprise numérique prospère"
      />

      <div className="grid grid-cols-3">
        {ITEMS.map(item => (
          <div>
            <div className=" inline-flex rounded-2xl bg-[#1C212D] mb-8 p-5">
              {item.icon}
            </div>

            <h3 className="font-body font-semibold text-1xl md:text-3xl text-white">
              {item.label}
            </h3>

            <p className="font-body text-blue-gray mt-6">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
