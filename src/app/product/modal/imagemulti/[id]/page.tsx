// import React from 'react';

// function ModalImage({ onClose }) {
//     // Close modal when clicking outside the modal content
//     const handleClickOutside = (e:any) => {
//         if (e.target.classList.contains('modal-overlay')) {
//             onClose();  // Close the modal if clicked on the overlay
//         }
//     };

//     return (
//         <div
//             className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
//             onClick={handleClickOutside} // Adding click handler to overlay
//         >
//             <div className=" p-4 w-[664px] h-[768px]">
//                 <div className="flex justify-between space-x-8 ">
//                     <h2 className="text-lg font-bold">Modal Content</h2>
//                     <button onClick={onClose} className="text-black">Close</button>
//                 </div>
//                 <img src="https://images.khmer24.co/22-12-12/397539-7-bedrooms-villa-available-for-rent-in-boeng-tumpun-area-1670824538-21713017-b.jpg" alt="Modal content" className="mt-4 w-full h-full"/>
//             </div>
//         </div>
//     );
// }

// export default ModalImage;





import React from "react";

function ModalImage({ imageUrl, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="relative bg-white rounded-lg p-4">
        <button
          className="absolute top-2 right-2 text-black bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={imageUrl}
          alt="Enlarged"
          className="max-w-full max-h-[80vh] rounded-lg"
        />
      </div>
    </div>
  );
}

export default ModalImage;
