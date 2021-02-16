import Link from "./Link";

const Langage = ({ lang }) => <span className="text-gray-700">{lang}</span>;

const Banner = () => (
  <div className="mt-24 mb-28">
    <img
      width={70}
      src="https://brandonsueur.fr/the-most-beautiful-person-its-me.jpg"
      className="mt-12 mb-10"
      style={{
        borderRadius: 20,
      }}
    />

    <h1 className="tracking-tight font-bold xl:text-5xl lg:text-4xl md:text-5xl text-4xl">
      Entrepreneur, développeur et designer.
    </h1>

    <p className="mt-5 text-xl text-gray-500 leading-8">
      J'écris principalement sur <Langage lang="JavaScript" />,{" "}
      <Langage lang="React.js" />, <Langage lang="Next.js" /> et{" "}
      <Langage lang="TailwindCSS" />. Si tu souhaites me suivre, tu peux me
      trouver sur{" "}
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
