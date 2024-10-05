import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><Github /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin /></a>
            <a href="#" className="hover:text-blue-400"><Twitter /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer