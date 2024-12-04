// "use client";


// import React from 'react'

// function Detailcategory() {
//     const category = [
//         { id: 1, name: "Electronics", image: "https://images.khmer24.co/categories/23-01-17/s-cars-and-vehicles-1673926803.png", },
//         { id: 3121, name: "Clothing", image: "https://images.khmer24.co/categories/21-12-07/s-mobile-phones-tablets-1638848154.png" },
//         { id: 1211, name: "Electronics", image: "https://images.khmer24.co/categories/21-12-07/s-computer-and-accessories-1638848160.png" },
//         { id: 321, name: "Clothing", image: "https://images.khmer24.co/categories/21-12-07/s-electronics-appliances-1638848165.png" },
//         { id: 112, name: "Electronics", image: "https://images.khmer24.co/categories/21-12-07/s-services-1638848194.png" },
//         { id: 31212, name: "Clothing", image: "https://images.khmer24.co/categories/23-09-21/s-property-housing-rentals-1695265714.png" },
//         { id: 121, name: "Electronics", image: "https://images.khmer24.co/categories/21-12-07/s-fashion-beauty-1638848200.png" },
//         { id: 3112, name: "Clothing", image: "https://images.khmer24.co/categories/21-12-07/s-jobs-1638848186.png" },
//         { id: 122, name: "Electronics", image: "https://images.khmer24.co/categories/21-12-07/s-furniture-decor-1638848206.png" },
//         { id: 13, name: "Clothing", image: "https://images.khmer24.co/categories/21-12-07/s-books-sports-hobbies-1638848212.png" },
//         { id: 11, name: "Electronics", image: "https://images.khmer24.co/categories/21-12-07/s-pets-1638848219.png" },
//         { id: 10, name: "Clothing", image: "https://images.khmer24.co/categories/21-12-07/s-foods-1638848268.png" },
//     ];
//     return (
//         <div className="body">
//             <div className="body_div space-y-4">
//                 <nav className="flex items-center text-sm text-gray-600 space-x-2">
//                     <a href="#" className="text-blue-500 hover:underline">Home</a>
//                     <span>/</span>
//                     <a href="#" className="text-blue-500 hover:underline">Category</a>
//                     <span>/</span>
//                     <span className="text-gray-800">Current Page</span>
//                 </nav>
//                 <div className="grid grid-cols-6 gap-4 p-4 bg-white rounded shadow">
//                     {category.map((item) => (
//                         <div key={item.id} className="flex flex-col items-center space-y-3 p-4 rounded">
//                             <div className="bg-blue-200 rounded-full h-16 w-16 flex items-center justify-center">
//                                 <img
//                                     className="h-16 object-cover"
//                                     src={item.image}
//                                     alt={item.name}
//                                 />
//                             </div>
//                             <p className="text-gray-800 text-center line-clamp-2">{item.name}</p>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Detailcategory




// src/app/category/detailcategory/[id]/page.js
'use client'; // Make sure you're using 'client' when working with dynamic routes in the `app` folder
import { useRouter } from 'next/router';

export default function DetailCategoryPage() {
  const router = useRouter();
  const { id } = router.query;

  // You can fetch the category data from an API or use static data
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Category ID: {id}</h1>
      <p>You are viewing category with ID {id}</p>
    </div>
  );
}
