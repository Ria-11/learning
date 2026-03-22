function Card() {
  return (
    <>
      <h1>this is a card component</h1>

      <div className="max-w-xs bg-white border border-gray-200 rounded-lg mt-8 shadow-md overflow-hidden transition-transform hover:scale-105">
        <img
          className="w-full h-32 object-cover"
          src="https://jooinn.com/images/cute-dog-19.jpg"
          alt="Cute dog"
        />
        <div className="p-3">
          <h2 className="text-md font-semibold text-gray-800">Card Title</h2>
          <p className="mt-2 text-gray-600 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            reiciendis id, officia consequuntur alias, aut obcaecati ex incidunt
            animi consectetur velit labore?
          </p>
          <button className="mt-3 w-full px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
            Buy Now
          </button>
        </div>
      </div>

      <div className="max-w-xs bg-white border border-gray-200 rounded-lg mt-8 shadow-md overflow-hidden transition-transform hover:scale-105">
        <img
          className="w-full h-32 object-cover"
          src="https://jooinn.com/images/cute-dog-19.jpg"
          alt="Cute dog"
        />
        <div className="p-3">
          <h2 className="text-md font-semibold text-gray-800">Card Title</h2>
          <p className="mt-2 text-gray-600 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            reiciendis id, officia consequuntur alias, aut obcaecati ex incidunt
            animi consectetur velit labore?
          </p>
          <button className="mt-3 w-full px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
            Buy Now
          </button>
        </div>
      </div>
    </>
  )
}

export default Card
