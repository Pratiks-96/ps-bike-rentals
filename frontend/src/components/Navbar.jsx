import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2>PS Bike Rentals</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/">Home</Link>
        <Link to="/rent">Rent a Bike</Link>
        <Link to="/list">List Your Bike</Link>
      </div>
    </nav>
  );
}
