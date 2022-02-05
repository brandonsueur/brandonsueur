const Banner = () => (
  <div className="mt-32 md:mt-44 mb-28">
    <div>
      <img
        src="/avatar.png"
        className="inline rounded-full border-4 border-primary mr-8"
        width={86}
        height={86}
      />

      <div className="inline bg-[#1C212D] border-2 border-[#262D3A] rounded-tl-3xl rounded-md p-6">
        <span className="inline font-body font-light text-[#9196A1] text-lg select-none">
          Bonjour, je suis Brandon <span className="wave">👋</span>
        </span>
      </div>
    </div>

    <h1 className="mt-24 font-body font-semibold text-white tracking-tight text-4xl xl:text-5xl">
      Apportez l’idée, je la développe.
    </h1>

    <p className="max-w-4xl font-body text-blue-gray mt-5 text-lg font-light text-gray-500 leading-8">
      Mon expertise couvre l'ensemble du processus de conception de produits
      numériques pour les sites web et les applications mobiles, y compris la
      communication visuelle et de marque.
    </p>
  </div>
);

export default Banner;
