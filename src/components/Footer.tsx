import React from 'react';
import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">G</span>
              </div>
              <span className="text-xl font-semibold">Gentiq AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Mission control for enterprise prompts. Design, test, and evolve AI prompts 
              with the same rigor as software code.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/gentiqai" className="text-gray-400 hover:text-white transition-colors" aria-label="Follow us on Twitter" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/gentiq-ai" className="text-gray-400 hover:text-white transition-colors" aria-label="Follow us on LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/gentiqai" className="text-gray-400 hover:text-white transition-colors" aria-label="View our GitHub" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:gentiqai@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><button className="hover:text-white transition-colors text-left" onClick={() => console.log('Documentation coming soon')}>Documentation</button></li>
              <li><button className="hover:text-white transition-colors text-left" onClick={() => console.log('API docs coming soon')}>API</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#solution" className="hover:text-white transition-colors">About</a></li>
              <li><button className="hover:text-white transition-colors text-left" onClick={() => console.log('Blog coming soon')}>Blog</button></li>
              <li><a href="https://www.linkedin.com/company/gentiq-ai/jobs" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Careers</a></li>
              <li><a href="mailto:gentiqai@gmail.com" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Gentiq AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-white text-sm transition-colors" onClick={() => console.log('Privacy Policy coming soon')}>Privacy Policy</button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors" onClick={() => console.log('Terms of Service coming soon')}>Terms of Service</button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors" onClick={() => console.log('Security page coming soon')}>Security</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
