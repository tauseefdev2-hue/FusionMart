import React from 'react'

const Categories = () => {
  const imgs = [
    { lin: "/m1.webp", heading: "Men" },
    { lin: "/m11.webp", heading: "Women" },
    { lin: "/m111.webp", heading: "Kids" },
    { lin: "/images.jpg", heading: "Accessories" },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Grid - Responsive columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {imgs.map((item, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <button className="cursor-pointer w-full aspect-square rounded-full overflow-hidden">
                <img
                  className="hover:scale-105 transition-all duration-500 ease-in-out w-full h-full object-cover"
                  src={item.lin}
                  alt={item.heading}
                />
              </button>
              <p className="mt-3 text-sm md:text-lg font-medium group-hover:text-[#EDB184] transition-colors">
                {item.heading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Categories