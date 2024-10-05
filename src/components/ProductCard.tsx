import React from 'react'

interface ProductCardProps {
  name: string
  description: string
  link: string
  icon: string
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, link, icon }) => {
  return (
    <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden card-hover">
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Explore
        </a>
      </div>
    </div>
  )
}

export default ProductCard