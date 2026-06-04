import { useEffect, useState } from "react";
// import { productdata } from "./CardDescdata";

const Carousel = ({product}) => {
  
const images=[product.Allimages?.firstImg,product.Allimages?.secondImg,product.Allimages?.thirdImg,product.Allimages?.fourthImg,product.Allimages?.fifthImg].filter(Boolean)
  const [selectedImage, setSelectedImage] = useState("");

useEffect(()=>{
    if(images.length>0){
        setSelectedImage(images[0])
    }
},[product])
return (
    <div className="w-full bg-white">
        {/* {productdata} */}
      {/* Main Image - Full width, full height visible, no cropping */}
      <div className=" bg-white flex items-center justify-center overflow-hidden">
        <img
          src={selectedImage}
          alt="Product"
          className="w-full  max-h-none object-contain transition ease-in-out duration-300 hover:scale-105 max-h-[840px] "
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`flex-shrink-0 w-16 h-16 border-2 p-1 transition ${
              selectedImage === img ? "border-orange-500" : "border-gray-300"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;