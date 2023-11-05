export default function Image1({ imageData, setImages, images, index }) {
  return (
    <div className="relative row-span-2 col-span-2 border border-b-1 border-gray-300 rounded-lg">
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blue-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"></div>
      <img className="rounded-lg " src={imageData.image} alt="product image" />
      <input
        className="absolute top-2 left-2"
        type="checkbox"
        value={imageData.checked}
        onChange={() => {
          let tempArray = [...images];
          tempArray[index].checked = !imageData.checked;
          setImages(tempArray);
        }}
      ></input>
    </div>
  );
}
