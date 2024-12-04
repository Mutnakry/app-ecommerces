"use client";

import React, { useRef, useState, useEffect } from "react";
import { CgMoreVertical } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";

function Product() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<{ id: number; name: string; description: string; price: number; image: string } | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const products = [
        { id: 123, name: "Electronics", description: "sale product", price: 12, image: "https://images.khmer24.co/24-05-24/s-490924-2-bedrooms-house-for-sale-in-khnar-krong-siem-reap-1716536106-24120145-b.jpg" },
        { id: 10, name: "Clothing", description: "sale product", price: 200, image: "https://images.khmer24.co/24-11-16/s-41-rooms-build-for-sale-amp-rent-169922173176695532363863-b.jpg" },
        { id: 23, name: "Electronics", description: "sale product", price: 12, image: "https://images.khmer24.co/24-11-25/s--ud83c-udfd8-villa-2007--527731173252238827494489-b.jpg" },
        { id: 1, name: "Clothing", description: "sale product", price: 200, image: "https://images.khmer24.co/24-11-25/s--ud83c-udfd8-villa-2007--527731173252238827494489-b.jpg" },
        { id: 323, name: "Electronics", description: "sale product", price: 12, image: "https://images.khmer24.co/24-11-05/s---326209173079124226108018-b.jpg" },
        { id: 1023, name: "Clothing", description: "sale product", price: 200, image: "https://images.khmer24.co/24-11-25/s-msi-raider-core-i9-14900hx-32g-m2-2tb-rtx4080-12g-4k-17-quot-new2024-2899--205497173251715448341841-b.jpg" },
    ];

    const openModal = (product: typeof products[0]) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            closeModal();
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <div className="body">
            <div className="body_div space-y-4 bg-blue-300 rounded pt-4">
                <h2 className="p-4">ផលិតផលពិសេស </h2>
                <div className="flex overflow-x-auto snap-x space-x-6 justify-between mx-2 scrollbar-hidden">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white relative rounded-lg flex-shrink-0 snap-center overflow-hidden">
                            <Link href={`/product/detailproduct/${product.id}`}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-56 w-72 object-cover"
                                />
                            </Link>
                            <div className="absolute top-0 right-0 text-white text-sm px-2 py-1 rounded-tr-xl rounded-bl-xl">
                                <CgMoreVertical
                                    onClick={() => openModal(product)}
                                    className="text-white-500 bg-slate-600 h-8 w-8 p-2 rounded-full opacity-50 cursor-pointer"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{product.name}</h3>
                                <p className="text-gray-500 text-sm">{product.description}</p>
                                <div className="mt-2 text-blue-600">$ {product.price}</div>
                            </div>
                            <div className="absolute bottom-2 right-0 text-white text-sm px-2 py-1 rounded-tr-xl rounded-bl-xl">
                                <CiHeart className="text-3xl text-gray-500 hover:text-red-600 font-bold" />
                            </div>
                        </div>

                    ))}
                </div>
                <img className="w-full" src="https://www.khmer24.com/icon/khmer24_footer.png" alt="" />

                {/* Modal */}
                {isModalOpen && selectedProduct && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div
                            ref={modalRef}
                            className="bg-white rounded-lg shadow-lg w-96 p-6"
                        >
                            <h2 className="text-xl font-semibold mb-4">Product Details</h2>
                            <p className="text-gray-600">Product Name: {selectedProduct.id}</p>
                            <p className="text-gray-600">Product Name: {selectedProduct.name}</p>
                            <p className="text-gray-600">Description: {selectedProduct.description}</p>
                            <p className="text-gray-600">Price: ${selectedProduct.price}</p>
                            <button
                                onClick={closeModal}
                                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Product;
