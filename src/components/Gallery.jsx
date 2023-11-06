import React, { useState } from "react";
import Image from "./Image";
import { FaRegImage } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Gallery() {
  const [images, setImages] = useState([
    { image: "./src/images/image-1.webp", id: 1, checked: false },
    { image: "./src/images/image-2.webp", id: 2, checked: false },
    { image: "./src/images/image-3.webp", id: 3, checked: false },
    { image: "./src/images/image-4.webp", id: 4, checked: false },
    { image: "./src/images/image-5.webp", id: 5, checked: false },
    { image: "./src/images/image-6.webp", id: 6, checked: false },
    { image: "./src/images/image-7.webp", id: 7, checked: false },
    { image: "./src/images/image-8.webp", id: 8, checked: false },
    { image: "./src/images/image-9.webp", id: 9, checked: false },
    { image: "./src/images/image-10.jpeg", id: 10, checked: false },
    { image: "./src/images/image-11.jpeg", id: 11, checked: false },
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

  const onDragEnd = (result) => {
    if (!result.destination) {
      return; // Drop was not successful
    }

    const reorderedImages = [...images];
    const [movedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, movedImage);

    setImages(reorderedImages);
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
        {images.map((item, index) => (
          <Image
            key={item.id}
            imageData={item}
            setImages={setImages}
            images={images}
            index={index}
          />
        ))}
        <label htmlFor="fileInput" className="cursor-pointer">
          <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center">
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleAddImage}
            />

            <FaRegImage size={70} />

            <p className="text-gray-500 mt-4 text-xl font-semibold">
              Add Images
            </p>
          </div>
        </label>
      </div>
    </>
  );
}

export default Gallery;
