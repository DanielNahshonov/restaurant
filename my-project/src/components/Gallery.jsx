import  { useState } from 'react';
import coctail from "../assets/coctail.jpg";
import coctailSunrise2 from "../assets/coctailSunrise2.jpg";
import coctailSunrise from "../assets/coctailSunrise.jpg";
import enterence from "../assets/enterence.jpg";
import eveningLook from "../assets/eveningLook.jpg";
import fish from "../assets/fish.jpg";
import foodSunrise from "../assets/foodSunrise.jpg";
import fruitPlate from "../assets/fruitPlate.jpg";
import morningMood from "../assets/morningMood.jpg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const pictureList = [
    coctail,
    coctailSunrise2,
    coctailSunrise,
    enterence,
    eveningLook,
    fish,
    foodSunrise,
    fruitPlate,
    morningMood
  ];

  const handleClick = (pic, index) => {
    if (isOpen && selectedImage === pic) {
      setIsOpen(false);
      setSelectedImage(null);
      setCurrentIndex(0);
    } else {
      setIsOpen(true);
      setSelectedImage(pic);
      setCurrentIndex(index);
    }
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictureList.length);
    setSelectedImage(pictureList[(currentIndex + 1) % pictureList.length]);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictureList.length) % pictureList.length);
    setSelectedImage(pictureList[(currentIndex - 1 + pictureList.length) % pictureList.length]);
  };

  return (
    <div className="relative">
      <div className={`flex flex-wrap gap-4 p-4 justify-center ${isOpen ? 'hidden' : ''}`}>
        {pictureList.map((pic, index) => (
          <div
            key={index}
            onClick={() => handleClick(pic, index)}
            className="w-24 h-24 rounded-full overflow-hidden border-2 border-white flex items-center justify-center cursor-pointer transition-transform duration-500 transform hover:scale-110"
          >
            <img
              src={pic}
              alt={`Story ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-500 ease-in-out"
          style={{ opacity: isOpen ? 1 : 0 }}
          onClick={handleOverlayClick}
        >
          <div
            className="relative w-full h-full max-w-screen-lg max-h-screen flex flex-col items-center justify-center transition-transform duration-500 ease-in-out"
            style={{ transform: isOpen ? 'scale(1)' : 'scale(0.9)' }}
            onClick={(e) => e.stopPropagation()} // Prevent click event from closing on inner content
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={handleOverlayClick}
            >
              &times;
            </button>
            <button
              className="absolute left-4 text-white text-2xl"
              onClick={handlePrev}
            >
              &larr;
            </button>
            <button
              className="absolute right-4 text-white text-2xl"
              onClick={handleNext}
            >
              &rarr;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="transition-transform duration-500 transform rounded-full border-8 border-peach"
              style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'cover' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
