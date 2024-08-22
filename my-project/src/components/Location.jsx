
export default function Location() {
  const handleMapClick = (platform) => {
    const location = "HaTayelet 17, Rishon LeTsiyon, Israel"; // Address or coordinates
    let url = '';

    switch(platform) {
      case 'google':
        url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
        break;
      case 'waze':
        url = `https://waze.com/ul?ll=${encodeURIComponent(location)}`;
        break;
      case 'apple':
        url = `https://maps.apple.com/?q=${encodeURIComponent(location)}`;
        break;
      default:
        return;
    }

    window.open(url, '_blank');
  };

  return (
    <div className="bg-peach flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-4xl h-96 mb-4">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.525464591968!2d34.78494151512172!3d31.95675148121424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b55a8047d61%3A0x8eaef15cbf349f3e!2sHaTayelet%2017%2C%20Rishon%20LeTsiyon%2C%20Israel!5e0!3m2!1sen!2s!4v1623920950823!5m2!1sen!2s"
          className="rounded-lg"
        ></iframe>
      </div>
      <div className="flex gap-4">
        <button
          className=" text-white py-2 px-4 rounded text-outline-peach hover:bg-white"
          onClick={() => handleMapClick('google')}
        >
          Open in Google Maps
        </button>
        <button
          className=" text-white py-2 px-4 rounded text-outline-peach hover:bg-white"
          onClick={() => handleMapClick('waze')}
        >
          Open in Waze
        </button>
        <button
          className=" text-white py-2 px-4 rounded text-outline-peach hover:bg-white"
          onClick={() => handleMapClick('apple')}
        >
          Open in Apple Maps
        </button>
      </div>
    </div>
  );
}
