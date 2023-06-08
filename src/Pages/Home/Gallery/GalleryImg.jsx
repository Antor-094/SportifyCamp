const GalleryImg = ({ image }) => {
  const { src, alt, name, description } = image;

  return (
    <div className="relative group rounded-lg overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-96 object-cover transition duration-500 ease-in-out transform group-hover:opacity-75 border-2 border-gray-300 shadow-lg"
      />
      <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-75 transition duration-500 ease-in-out"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out">
        <div className="bg-gray-900 bg-opacity-75 p-4 rounded-lg transform scale-0 group-hover:scale-100 transition duration-1000 ease-in-out">
          <h2 className="text-white font-bold text-2xl">{name}</h2>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryImg;
