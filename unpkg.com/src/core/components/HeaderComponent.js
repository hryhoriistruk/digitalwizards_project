// Import necessary modules
import './styles.css';

// Create the header element
const header = document.createElement('header');

// Create the navigation menu
const nav = document.createElement('nav');
nav.innerHTML = `
  <ul>
    <li><a href="#hero">Home</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#testimonials">Testimonials</a></li>
    <li><a href="#blog">Blog</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
`;

// Add the navigation menu to the header
header.appendChild(nav);

// Add the header to the page
document.body.appendChild(header);

// Create the hero section
const hero = document.createElement('section');
hero.id = 'hero';
hero.innerHTML = `
  <img src="hero-image.jpg" alt="Hero Image">
  <h1>Welcome to Digital Wizards</h1>
  <button class="cta-btn">Get Started</button>
`;
document.body.appendChild(hero);

// Create the features section
const features = document.createElement('section');
features.id = 'features';
features.innerHTML = `
  <h2>Features</h2>
  <ul>
    <li>
      <i class="fas fa-magic"></i>
      <h3>Digital Magic</h3>
      <p>Experience the power of digital magic</p>
    </li>
    <li>
      <i class="fas fa-wand"></i>
      <h3>Wizardly Tools</h3>
      <p>Discover our collection of wizardly tools</p>
    </li>
    <li>
      <i class="fas fa-community"></i>
      <h3>Community Support</h3>
      <p>Join our community of digital wizards</p>
    </li>
  </ul>
`;
document.body.appendChild(features);

// Create the testimonials section
const testimonials = document.createElement('section');
testimonials.id = 'testimonials';
testimonials.innerHTML = `
  <h2>Testimonials</h2>
  <ul>
    <li>
      <img src="user1.jpg" alt="User 1">
      <p>"Digital Wizards has changed my life!"</p>
      <span>John Doe</span>
    </li>
    <li>
      <img src="user2.jpg" alt="User 2">
      <p>"I'm loving the digital magic tools!"</p>
      <span>Jane Doe</span>
    </li>
    <li>
      <img src="user3.jpg" alt="User 3">
      <p>"The community support is amazing!"</p>
      <span>Bob Smith</span>
    </li>
  </ul>
`;
document.body.appendChild(testimonials);

// Create the footer
const footer = document.createElement('footer');
footer.innerHTML = `
  <ul>
    <li><a href="https://www.facebook.com/digitalwizards">Facebook</a></li>
    <li><a href="https://www.twitter.com/digitalwizards">Twitter</a></li>
    <li><a href="https://www.instagram.com/digitalwizards">Instagram</a></li>
  </ul>
  <p>Contact us at <a href="mailto:info@digitalwizards.com">info@digitalwizards.com</a></p>
`;
document.body.appendChild(footer);
 );
};

export default HeaderComponent;