import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ onOpenModal }) {
  return (
    <footer className="site-footer">
      <div className="footer-watermark">SKYWEB</div>

      <div className="section-container footer-inner">
        <div className="footer-columns-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-title" aria-label="SkyWeb Home">
              <img 
                src="/assets/logo.png" 
                alt="SkyWeb Logo" 
                className="footer-brand-logo-img" 
              />
            </Link>
            <p className="footer-legal-name">SKYWEB PRIVATE LIMITED</p>
            <p className="footer-brand-sub">
              We scale what others only dream of. Technology engineering for businesses ready to build, transform and scale.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Company</h4>
            <ul className="footer-nav-list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/insights">Insights & Articles</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/capabilities">Capabilities</Link></li>
              <li><Link to="/process">Our Process</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Technology Insights</h4>
            <ul className="footer-nav-list">
              <li><Link to="/insights/software-engineering">Software Engineering</Link></li>
              <li><Link to="/insights/ai-machine-learning">AI & Machine Learning</Link></li>
              <li><Link to="/insights/cloud-infrastructure">Cloud & Infrastructure</Link></li>
              <li><Link to="/insights/digital-platforms">Digital Platforms</Link></li>
              <li><Link to="/insights/business-technology">Business Technology</Link></li>
              <li><Link to="/insights/technology-consulting">Technology Consulting</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="footer-nav-col">
            <h4 className="footer-col-heading">Contact & Support</h4>
            <ul className="footer-nav-list">
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onOpenModal(); }}>Contact</a></li>
              <li><a href="mailto:offical@skywebinternational.com">Support</a></li>
              <li><Link to="/about">About Company</Link></li>
            </ul>

            <div className="footer-contact-details">
              <a href="mailto:offical@skywebinternational.com">offical@skywebinternational.com</a>
              <a href="tel:+919121428210">+91 9121428210</a>
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>
        </div>

        {/* Sub-footer Bar */}
        <div className="sub-footer-bar">
          <span>© 2026 SkyWeb Private Limited. All rights reserved.</span>
          <div className="sub-footer-links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); onOpenModal(); }}>Privacy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); onOpenModal(); }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
