import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-6 mt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side: Company Name + Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold text-black">Job Hunt</h2>
          <p className="text-sm text-gray-500">© 2024 Your Company. All rights reserved.</p>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4">
          {/* Facebook */}
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 text-black hover:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82V14.706h-3.17v-3.62h3.17V8.413c0-3.134 1.91-4.833 4.699-4.833 1.34 0 2.494.1 2.83.144v3.28h-1.942c-1.523 0-1.818.724-1.818 1.785v2.34h3.633l-.474 3.62h-3.159V24h6.191C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z" />
            </svg>
          </a>

          {/* Twitter */}
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 text-black hover:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.574A4.903 4.903 0 01.964 9.1v.062a4.916 4.916 0 003.946 4.814 4.902 4.902 0 01-2.212.084 4.919 4.919 0 004.59 3.417A9.867 9.867 0 010 21.539 13.945 13.945 0 007.548 24c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0024 4.557z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 text-black hover:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452H17.2v-5.569c0-1.328-.026-3.036-1.849-3.036-1.849 0-2.131 1.445-2.131 2.939v5.666h-3.248V9h3.122v1.561h.045c.435-.823 1.496-1.692 3.077-1.692 3.291 0 3.898 2.165 3.898 4.981v6.602zM5.337 7.433a1.88 1.88 0 110-3.761 1.88 1.88 0 010 3.761zM6.847 20.452H3.827V9h3.02v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.277V1.723C24 .771 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
