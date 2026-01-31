export default function BikeCards() {
  const bikes = [
    { name: 'Royal Enfield', price: '₹499/day' },
    { name: 'Yamaha R15', price: '₹399/day' },
    { name: 'KTM Duke', price: '₹450/day' },
  ];

  return (
    <section style={{ padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
      {bikes.map((bike, i) => (
        <div key={i} style={{ background: '#1e293b', padding: '20px', borderRadius: '16px', boxShadow: '0 0 15px #0ea5e9' }}>
          <h3>{bike.name}</h3>
          <p>{bike.price}</p>
          <button>Rent Now</button>
        </div>
      ))}
    </section>
  );
}
