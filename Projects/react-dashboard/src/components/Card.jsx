const Card = ({ title, value, borderColor }) => {
  return (
    <div className="card" style={{ borderLeft: `5px solid ${borderColor}` }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default Card;
