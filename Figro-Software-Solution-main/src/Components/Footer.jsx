import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#cce3de] text-black font-normal p-8">
      {/* Footer Grid Container */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-gray-600 transition-all">About Us</a></li>
            <li><a href="/careers" className="hover:text-gray-600 transition-all">Careers</a></li>
            <li><a href="/press" className="hover:text-gray-600 transition-all">Press</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/services" className="hover:text-gray-600 transition-all">Services</a></li>
            <li><a href="/portfolio" className="hover:text-gray-600 transition-all">Portfolio</a></li>
            <li><a href="/blog" className="hover:text-gray-600 transition-all">Blog</a></li>
            <li><a href="/contact" className="hover:text-gray-600 transition-all">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li>123 Innovation Street, Tech City</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: <a href="mailto:contact@yourcompany.com" className="hover:text-gray-600 transition-all">contact@yourcompany.com</a></li>
            <li>Support: <a href="mailto:support@yourcompany.com" className="hover:text-gray-600 transition-all">support@yourcompany.com</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-all">LinkedIn</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-all">Twitter</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-all">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-all">Instagram</a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/privacy-policy" className="hover:text-gray-600 transition-all">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-gray-600 transition-all">Terms of Service</a></li>
            <li><a href="/cookie-policy" className="hover:text-gray-600 transition-all">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-gray-300 pt-4">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
