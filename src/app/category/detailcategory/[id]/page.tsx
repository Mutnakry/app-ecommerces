"use client";
import Link from 'next/link';
import React from 'react'
import { FaHome } from "react-icons/fa";
import Product1Ros from "../../../component/product/product1row/page"

function Detailcategory() {
    const category = [
        { id: 1, name: "Electronics", image: "https://images.khmer24.co/categories/23-01-17/s-cars-and-vehicles-1673926803.png", },
        { id: 3121, name: "Clothing", image: "https://images.khmer24.co/categories/21-12-07/s-mobile-phones-tablets-1638848154.png" },
        { id: 1211, name: "Electronics", image: "https://images.khmer24.co/categories/21-12-07/s-computer-and-accessories-1638848160.png" },
        { id: 321, name: "Clothing", image: "https://images.khmer24.co/categories/21-12-07/s-electronics-appliances-1638848165.png" },
        { id: 112, name: "Electronics", image: "https://images.khmer24.co/categories/21-12-07/s-services-1638848194.png" },
        { id: 31212, name: "Clothing", image: "https://images.khmer24.co/categories/23-09-21/s-property-housing-rentals-1695265714.png" },

    ];
    return (
        <div className="body py-4 relative">
            <div className="body_div space-y-4">
                <nav className="flex items-center text-gray-600 space-x-2 text-md">
                    <a href="#" className="text-blue-500 hover:underline flex space-x-2"><FaHome className='text-xl' /><span>ទំព័រដើន </span></a>
                    <span>/</span>
                    <a href="#" className="hover:underline text-sm">ទូរស័ព្ទ និង Tablets ក្នុង កម្ពុជា</a>
                </nav>
                <div className='shadow p-4 bg-white'>
                    <p>ទូរស័ព្ទ និង Tablets ក្នុង កម្ពុជា</p>
                    <div className="grid grid-cols-6 gap-4">
                        {category.map((item) => (
                            <div key={item.id} className="flex flex-col items-center space-y-3 p-4 rounded">
                                <div className="bg-blue-200 rounded-full h-16 w-16 flex items-center justify-center">
                                    <Link href={`/category/detailcategory/${item.id}`}>
                                        <img
                                            className="h-16 object-cover"
                                            src={item.image}
                                            alt={item.name}
                                        />
                                    </Link>
                                </div>
                                <p className="text-gray-800 text-center line-clamp-2">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='max-w-screen-md mx-auto'>
                    <div className='bg-gray-200 w-[768px] h-[90px]'>
                        <img className='w-[768px] h-[90px]' src="https://www.khmer24.ws/www/delivery/ai.php?filename=hs-auto.gif%20(2)&contenttype=gif" alt=" w-[768px] h-[90px]" />
                    </div>
                </div>

<div>
    <Product1Ros/>
</div>
            </div>
        </div>
    )
}

export default Detailcategory
