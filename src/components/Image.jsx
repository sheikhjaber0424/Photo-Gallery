export default function Image({ imageData, setImages, images, index }) {
  const isImage1 = index === 0;
  const wrapperClasses = `relative border border-b-1 border-gray-300 rounded-lg ${
    isImage1 ? "row-span-2 col-span-2" : ""
  }`;

  return (
    <div className={wrapperClasses}>
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blue-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"></div>
      <img className="rounded-lg" src={imageData.image} alt="product image" />
      <input
        className="absolute top-2 left-2"
        type="checkbox"
        value={imageData.checked}
        onChange={() => {
          let tempArray = [...images];
          tempArray[index].checked = !imageData.checked;
          setImages(tempArray);
        }}
      />
    </div>
  );
}
