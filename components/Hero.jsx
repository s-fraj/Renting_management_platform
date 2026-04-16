function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="hero-eyebrow">Available Now</span>
        <h1 className="hero-title">
          Your Student Life,
          <br />
          <span className="highlight">Upgraded.</span>
        </h1>
        <p>
          The exclusive Tunisian marketplace for students. Find the perfect home,
          share a ride, and connect with your future roommates all in one premium
          space.
        </p>
        <div className="hero-actions">
          <a className="hero-button" href="#">
            Explore Marketplace
          </a>
          <a className="hero-button-secondary" href="#">
            Join Community
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
