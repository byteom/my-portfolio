const Modal = ({ image, onClose }) => {
    if (!image) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-4 rounded-lg shadow-lg relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
          >
            ✖
          </button>
          <img src={image} alt="Certification" className="max-w-lg max-h-96 object-contain" />
        </div>
      </div>
    );
  };
  
  export default Modal;
  