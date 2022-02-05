import Button from "@components/Button";

const Banner = () => (
  <div className="mt-32 md:mt-44 mb-28">
    <div>
      <img
        src="/avatar.png"
        className="w-[68px] md:w-[86px] inline rounded-full border-4 border-primary mr-8"
      />

      <div className="inline bg-[#1C212D] border-2 border-[#262D3A] rounded-tl-3xl rounded-md p-5">
        <span className="inline font-body font-light text-[#9196A1] text-sm md:text-lg select-none">
          Bonjour, je suis Brandon <span className="wave">👋</span>
        </span>
      </div>
    </div>

    <h1 className="font-body font-semibold leading-4 md:leading-normal text-white tracking-tight text-xl md:text-4xl xl:text-5xl">
      Apportez l’idée, je la développe.
    </h1>

    <p className="max-w-4xl font-body text-blue-gray mt-5 text-sm md:text-lg font-light text-gray-500 leading-8">
      Mon expertise couvre l'ensemble du processus de conception de produits
      numériques pour les sites web et les applications mobiles, y compris la
      communication visuelle et de marque.
    </p>

    <div className="mt-16">
      <Button hasArrow>Mes réalisations</Button>
    </div>
  </div>
);

export default Banner;
