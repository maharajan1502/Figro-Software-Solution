import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="footer  text-center bg-[#cce3de] font-normal p-4">
        <h3>About Us</h3>
      <div className="footer-container flex space-y-3 justify-between">
        {/* Company Information */}
        <div className="footer-section">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/press">Press</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>123 Innovation Street, Tech City, Country</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: <a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a></li>
            <li>Support: <a href="mailto:support@yourcompany.com">support@yourcompany.com</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/cookie-policy">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom text-center p-5">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>

    </div>
  )
}

export default Footer
