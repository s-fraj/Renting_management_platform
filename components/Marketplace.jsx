import "./MainSection.css";

function Marketplace() {
  return (
    <div className="card marketplace-card">
      <div className="marketplace-card-header">
        <h2>Marketplace</h2>
        <a href="#" className="marketplace-link">
          Browse all listings →
        </a>
      </div>
      <div className="marketplace-preview">
        <div className="marketplace-item">
          <div className="marketplace-item-image">
            <img src="https://via.placeholder.com/100x60" alt="Car" />
          </div>
          <div className="marketplace-item-info">
            <h4>VW Polo</h4>
            <p>80TND/day</p>
          </div>
        </div>
        <div className="marketplace-item">
          <div className="marketplace-item-image">
            <img src="https://via.placeholder.com/100x60" alt="Apartment" />
          </div>
          <div className="marketplace-item-info">
            <h4>2BR Apartment</h4>
            <p>1200TND/mo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketplace;