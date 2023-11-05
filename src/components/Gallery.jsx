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

  const handleDelete = () => {
    const filteredArr = images.filter((item) => !item.checked);
    setImages(filteredArr);
  };

  const isDeleteButtonVisible = images.some((item) => item.checked);
  const selectedCount = images.filter((item) => item.checked).length;

  const handleAddImage = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onload = function () {
        const imageData = {
          image: reader.result,
          id: images.length + 1,
          checked: false,
        };

        setImages([...images, imageData]);
      };
      reader.readAsDataURL(file);

      e.target.value = null;
    }
  };

  return (
    <>
      <div className="bg-white p-6  top-0 border border-b-1">
        <div className="flex justify-between items-center">
          <div>
            {selectedCount > 0 && (
              <>
                <input
                  className="mr-1"
                  type="checkbox"
                  checked={selectedCount > 0}
                />
                {selectedCount === 1
                  ? `${selectedCount} File Selected`
                  : `${selectedCount} Files Selected`}
              </>
            )}
            {selectedCount === 0 && (
              <h2 className="text-xl font-bold">Gallery</h2>
            )}
          </div>
          <div>
            {isDeleteButtonVisible && (
              <button
                className="text-red-600 text-xl"
                onClick={() => handleDelete(images)}
              >
                {selectedCount === 1 ? "Delete File" : "Delete Files"}
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="min-w-full p-5 bg-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-6">
        {images.map((item, index) =>
          index === 0 ? (
            <Image1
              key={item.id}
              imageData={item}
              setImages={setImages}
              images={images}
              index={index}
            />
          ) : (
            <Image2
              key={item.id}
              imageData={item}
              setImages={setImages}
              images={images}
              index={index}
            />
          )
        )}
      </div>
    </>
  );
}

export default Gallery;
