import React from 'react'

const Body = () => {
  return (
    <div
    className=' h-[90vh]  '
    >
        <div className="py-8">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        {/* Location Search Bar */}
        <div className="w-full max-w-xs">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            className="w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        
        {/* Category Select Dropdown */}
        <div className="w-full max-w-xs">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            className="w-full px-4 py-2 border border-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="">Select a category</option>
            <option value="electrician">Electrician</option>
            <option value="plumber">Plumber</option>
            <option value="carpenter">Carpenter</option>
            <option value="gardener">Gardener</option>
            <option value="painter">Painter</option>
          </select>
        </div>
      </div>
    </div>
        
    </div>
  )
}

export default Body