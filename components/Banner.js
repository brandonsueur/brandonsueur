import Link from "./Link";
import Image from "next/image";

const Langage = ({ lang }) => <span className="text-gray-700">{lang}</span>;

const Banner = () => (
  <div className="mt-24 mb-28">
    <img width={70} height={70} src="/favicon/apple-icon.png" />

    <h1 className="tracking-tight font-bold xl:text-5xl lg:text-4xl md:text-5xl text-4xl">
      Entrepreneur et développeur Front-End
    </h1>

    <p className="mt-5 text-xl text-gray-500 leading-8">
      Mon expertise couvre l'ensemble du processus de conception de produits
      numériques pour les Sites web et les Applications mobiles, y compris la
      communication visuelle et de marque.
      <br />
      <br />
      Si tu souhaites me suivre, tu peux me trouver sur{" "}
      <Link
        title="Twitter"
        href="https://twitter.com/_brandonsueur"
        target="_blank"
      />
      ,{" "}
      <Link
        title="Twitch"
        href="https://twitch.tv/brandonsueur"
        target="_blank"
      />{" "}
      ou{" "}
      <Link
        title="GitHub"
        href="https://github.com/brandonsueur"
        target="_blank"
      />
      .
    </p>
  </div>
);

export default Banner;
