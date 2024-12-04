"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedName, setSelectedName] = useState("");

  const category = [
    {
      id: 1,
      name: "Electronics",
      image:
        "https://images.khmer24.co/categories/23-01-17/s-cars-and-vehicles-1673926803.png",
    },
    {
      id: 3121,
      name: "Clothing",
      image:
        "https://images.khmer24.co/categories/21-12-07/s-mobile-phones-tablets-1638848154.png",
    },
    // ...rest of your category data
  ];

  // Function to handle modal display
  const openModal = (name:any) => {
    setSelectedName(name);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedName("");
  };

  return (
    <div className="body relative">
      <div className="body_div space-y-4">
        <h2 className="text-xl font-bold text-gray-800">
          សូមស្វាគមន៍មកកាន់ khmer24.com ទីផ្សារអនឡាញដ៏ធំបំផុតនៅក្នុងប្រទេសកម្ពុជា។
        </h2>
        <div className="grid grid-cols-6 gap-4 p-4 bg-white rounded shadow">
          {category.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center space-y-3 p-4 rounded hover:bg-gray-100 transition"
            >
              <div className="bg-blue-300 rounded-full h-16 w-16 flex cursor-default items-center justify-center overflow-hidden">
                <Link href={`/category/detailcategory/${item.id}`}>
                  <img
                    className="h-full w-full object-cover cursor-pointer"
                    src={item.image}
                    alt={item.name}
                  />
                </Link>
              </div>
              {/* Handle click on the name */}
              <p
                onClick={() => openModal(item.name)}
                className="text-gray-800 text-center text-sm font-medium line-clamp-2 cursor-pointer"
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-lg font-bold">Category Name</h2>
            <p className="text-gray-700 mt-4">{selectedName}</p>
            <button
              onClick={closeModal}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import { CgMoreVertical } from "react-icons/cg";
// import { CiHeart } from "react-icons/ci";
// import Link from "next/link";

// function Product() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedProduct, setSelectedProduct] = useState<{ id: number; name: string; description: string; price: number; image: string } | null>(null);
//     const modalRef = useRef<HTMLDivElement>(null);

//     const products = [
//         { id: 123, name: "Electronics", description: "sale product", price: 12, image: "https://images.khmer24.co/24-05-24/s-490924-2-bedrooms-house-for-sale-in-khnar-krong-siem-reap-1716536106-24120145-b.jpg" },
//         { id: 10, name: "Clothing", description: "sale product", price: 200, image: "https://images.khmer24.co/24-11-16/s-41-rooms-build-for-sale-amp-rent-169922173176695532363863-b.jpg" },
//         { id: 23, name: "Electronics", description: "sale product", price: 12, image: "https://images.khmer24.co/24-11-25/s--ud83c-udfd8-villa-2007--527731173252238827494489-b.jpg" },
//         { id: 1, name: "Clothing", description: "sale product", price: 200, image: "https://images.khmer24.co/24-11-25/s--ud83c-udfd8-villa-2007--527731173252238827494489-b.jpg" },
//         { id: 323, name: "Electronics", description: "sale product", price: 12, image: "https://images.khmer24.co/24-11-05/s---326209173079124226108018-b.jpg" },
//         { id: 1023, name: "Clothing", description: "sale product", price: 200, image: "https://images.khmer24.co/24-11-25/s-msi-raider-core-i9-14900hx-32g-m2-2tb-rtx4080-12g-4k-17-quot-new2024-2899--205497173251715448341841-b.jpg" },
//     ];

   

  
//     return (
//         <div className="body">
//             <div className="body_div space-y-4 bg-blue-300 rounded pt-4">
//                 <h2 className="p-4">ផលិតផលពិសេស </h2>
//                 <div className="flex overflow-x-auto snap-x space-x-6 justify-between mx-2 scrollbar-hidden">
//                     {products.map((product) => (
//                         <div key={product.id} className="bg-white relative rounded-lg flex-shrink-0 snap-center overflow-hidden">
//                             <Link href={`/product/detailproduct/${product.id}`}>
//                                 <img
//                                     src={product.image}
//                                     alt={product.name}
//                                     className="h-56 w-72 object-cover"
//                                 />
//                             </Link>
                      
//                             <div className="p-4">
//                                 <h3 className="font-semibold text-lg">{product.name}</h3>
//                                 <p className="text-gray-500 text-sm">{product.description}</p>
//                                 <div className="mt-2 text-blue-600">$ {product.price}</div>
//                             </div>
//                             <div className="absolute bottom-2 right-0 text-white text-sm cursor-pointer px-2 py-1 rounded-tr-xl rounded-bl-xl">
//                                 <CiHeart className="text-3xl text-gray-500 cursor-pointer  hover:text-red-600 font-bold" />
//                             </div>
//                         </div>

//                     ))}
//                 </div>
//                 <button>add to</button>
//                 <img className="w-full" src="https://www.khmer24.com/icon/khmer24_footer.png" alt="" />

               
//             </div>
//         </div>
//     );
// }

// export default Product;
