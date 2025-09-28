export default function SummaryCards() {
  const cards = [
    { title: 'PRODUCTS', value: 300, color: '#ffc107' },
    { title: 'CATEGORY', value: 12, color: '#4caf50' },
    { title: 'CUSTOMERS', value: 43, color: '#03a9f4' },
    { title: 'ALERTS', value: 31, color: '#f44336' },
  ];

  return (
    <div className="summary-cards">
      {cards.map((card, idx) => (
        <div className="summary-card" key={idx} style={{ backgroundColor: card.color }}>
          <h4>{card.title}</h4>
          <p>{card.value}</p>
        </div>
      ))}
    </div>
  );
}
