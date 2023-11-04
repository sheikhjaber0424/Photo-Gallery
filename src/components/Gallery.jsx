import React, { useState } from "react";
import Image1 from "./Image1";
import Image2 from "./Image2";

function Gallery() {
  const [images, setImages] = useState([
    { image: "/src/images/image-1.webp", id: 1, checked: false },
    { image: "/src/images/image-2.webp", id: 2, checked: false },
    { image: "/src/images/image-3.webp", id: 3, checked: false },
    { image: "/src/images/image-4.webp", id: 4, checked: false },
    { image: "/src/images/image-5.webp", id: 5, checked: false },
    { image: "/src/images/image-6.webp", id: 6, checked: false },
    { image: "/src/images/image-7.webp", id: 7, checked: false },
    { image: "/src/images/image-8.webp", id: 8, checked: false },
    { image: "/src/images/image-9.webp", id: 9, checked: false },
    { image: "/src/images/image-10.jpeg", id: 10, checked: false },
    { image: "/src/images/image-11.jpeg", id: 11, checked: false },
  ]);

  return (
    <>
      <div className="min-w-full p-5 bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6">
        {images.map((item, index) =>
          index === 0 ? (
            <Image1 key={item.id} imageData={item} />
          ) : (
            <Image2 key={item.id} imageData={item} />
          )
        )}
      </div>
    </>
  );
}

export default Gallery;
