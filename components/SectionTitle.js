const SectionTitle = ({ id, title, paragraph }) => {
  return (
    <div className={`section-${id} mt-48 mb-24`}>
      <h2 className="font-body font-semibold text-xl md:text-4xl text-white">
        {title}
      </h2>
      {paragraph && <p className="font-body text-blue-gray">{paragraph}</p>}
    </div>
  );
};

export default SectionTitle;
