import React from 'eact';

const FeaturesSectionComponent = () => {
  return (
    <section className="features-section">
      <h2>Our Amazing Features</h2>
      <div className="features-grid">
        <div className="feature">
          <i className="fas fa-rocket"></i>
          <h3>Fast Performance</h3>
          <p>Our platform is optimized for speed and performance, ensuring a seamless user experience.</p>
        </div>
        <div className="feature">
          <i className="fas fa-lock"></i>
          <h3>Secure Data</h3>
          <p>We take data security seriously, with robust measures in place to protect your information.</p>
        </div>
        <div className="feature">
          <i className="fas fa-cog"></i>
          <h3>Customizable</h3>
          <p>Our platform is highly customizable, allowing you to tailor it to your specific needs.</p>
        </div>
        <div className="feature">
          <i className="fas fa-mobile-alt"></i>
          <h3>Mobile Friendly</h3>
          <p>Our platform is fully responsive, ensuring a great user experience on any device.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionComponent;