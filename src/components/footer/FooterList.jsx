const FooterList = ({ heading, item }) => {
  return (
    <div className="my-2">
      <h1 className="uppercase mb-2 font-medium text-md">{heading}</h1>
      <ul className="*:text-[#5597C1">
        {item.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default FooterList;
