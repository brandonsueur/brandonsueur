const SectionTitle = ({ id, title, paragraph, noMb }) => {
  return (
    <div className={`section-${id} ${!noMb && "mb-24"}`}>
      <h2 className="mb-2 font-body text-xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {paragraph && <p className="font-body text-blue-gray">{paragraph}</p>}
    </div>
  );
};

export default SectionTitle;
