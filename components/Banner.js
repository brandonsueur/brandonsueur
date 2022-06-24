import Button from "@components/Button";
import { Link } from "react-scroll";

const Banner = () => (
  <div className="mt-32 md:mt-44">
    <div className="mb-32">
      <img
        src="/avatar.png"
        className="mr-8 inline w-68 rounded-full border-4 border-primary md:w-86"
      />

      <div className="inline rounded-md rounded-tl-3xl border-2 border-grey-light2 bg-grey-light p-5">
        <span className="inline select-none font-body text-sm font-light text-grey-light3 md:text-lg">
          Bonjour, je suis Brandon <span className="wave">👋</span>
        </span>
      </div>
    </div>

    <h1 className="font-body text-xl font-semibold text-white md:text-4xl xl:text-5xl">
      Apportez l’idée, je la développe.
    </h1>

    <p className="mt-5 max-w-4xl font-body font-light leading-8 text-blue-gray md:text-lg">
      Mon expertise couvre l'ensemble du processus de conception de produits
      numériques pour les sites web et les applications mobiles, y compris la
      communication visuelle et de marque.
    </p>

    <div className="mt-10 md:mt-16">
      <Link
        key="projects"
        to="projects"
        offset={-80}
        delay={100}
        spy={true}
        smooth={true}>
        <Button hasArrow>Mes réalisations</Button>
      </Link>
    </div>
  </div>
);

export default Banner;
