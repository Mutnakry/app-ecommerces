"use client";

import Link from 'next/link';

export default function Dashboard() {

  const category = [
    {
      id: 1,
      name: 'Electronics',
      image: 'https://images.khmer24.co/categories/23-01-17/s-cars-and-vehicles-1673926803.png',
    },
    {
      id: 3121,
      name: 'Clothing',
      image: 'https://images.khmer24.co/categories/21-12-07/s-mobile-phones-tablets-1638848154.png',
    },
    {
      id: 1211,
      name: 'Electronics',
      image: 'https://images.khmer24.co/categories/21-12-07/s-computer-and-accessories-1638848160.png',
    },
    {
      id: 321,
      name: 'Clothing',
      image: 'https://images.khmer24.co/categories/21-12-07/s-electronics-appliances-1638848165.png',
    },
    {
      id: 112,
      name: 'Electronics',
      image: 'https://images.khmer24.co/categories/21-12-07/s-services-1638848194.png',
    },
    {
      id: 31212,
      name: 'Clothing',
      image: 'https://images.khmer24.co/categories/23-09-21/s-property-housing-rentals-1695265714.png',
    },
    {
      id: 121,
      name: 'Electronics',
      image: 'https://images.khmer24.co/categories/21-12-07/s-fashion-beauty-1638848200.png',
    },
    {
      id: 3112,
      name: 'Clothing',
      image: 'https://images.khmer24.co/categories/21-12-07/s-jobs-1638848186.png',
    },
    {
      id: 122,
      name: 'Electronics',
      image: 'https://images.khmer24.co/categories/21-12-07/s-furniture-decor-1638848206.png',
    },
    {
      id: 13,
      name: 'Clothing',
      image: 'https://images.khmer24.co/categories/21-12-07/s-books-sports-hobbies-1638848212.png',
    },
    {
      id: 11,
      name: 'Electronics',
      image: 'https://images.khmer24.co/categories/21-12-07/s-pets-1638848219.png',
    },
    {
      id: 10,
      name: 'Clothing',
      image: 'https://images.khmer24.co/categories/21-12-07/s-foods-1638848268.png',
    },
  ];

  return (
    <div className="body relative">
      <div className="body_div space-y-4">
        <h2 className="text-xl font-bold text-gray-800">
          សូមស្វាគមន៍មកកាន់ khmer24.com ទីផ្សារអនឡាញដ៏ធំបំផុតនៅក្នុងប្រទេសកម្ពុជា។
        </h2>
        <div className="grid grid-cols-6 gap-4 p-4 bg-white rounded shadow">
          {category.map((item) => (
            <div key={item.id} className="flex flex-col items-center space-y-3 p-4 rounded hover:bg-gray-100 transition">
              <div className="bg-blue-300 rounded-full h-16 w-16 flex items-center justify-center overflow-hidden">
                <Link href={`/category/detailcategory/${item.id}`}>
                  <img
                    className="h-full w-full object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                </Link>
              </div>
              <p className="text-gray-800 text-center text-sm font-medium line-clamp-2">
                {item.name}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




