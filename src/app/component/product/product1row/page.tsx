"use client";

import React, { useRef, useState, useEffect } from "react";
import { CgMoreVertical } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";

function Product() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<{ id: number; name: string; description: string; price: number; image: string } | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const products = [
        { id: 123, name: "Electronics", description: "sale productpro ductprodu ctproductpr oductproductp roductproduct", price: 2112, image: "https://images.khmer24.co/24-11-21/s-suzuki-nex-2025-504064173218367729943498-b.jpg" },
        { id: 10, name: "Clothing", description: "sale product", price: 2200, image: "https://images.khmer24.co/24-11-24/s-honda-adv-504064173241675051069716-b.jpg" },
        { id: 23, name: "Electronics", description: "saleale productpro ductprodu ctproductpr oductproductp roductproduct product", price: 112, image: "https://images.khmer24.co/24-11-12/s---950006173137268425920530-b.jpg" },
        { id: 1, name: "Clothing", description: "sale product", price: 750, image: "https://images.khmer24.co/24-08-30/s-iphone-12-promax-367332172503458751546800-b.jpg" },
       { id: 13, name: "Clothing", description: "sale product", price: 10, image: "https://images.khmer24.co/23-06-17/s-iphone13-case-390739168697954883124665-b.jpg" },
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
            <div className="body_div space-y-4 rounded p-4">
                <div className="grid grid-cols-1 gap-4">
                    {products.map((product) => (

                        <div key={product.id} className="bg-white border-2  rounded-lg flex">
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-56 w-72 object-cover rounded-t-lg"
                                />
                                <div className="absolute top-2 right-2">
                                    <CgMoreVertical
                                        onClick={() => openModal(product)}  // Ensure this function is defined
                                        className="text-white bg-slate-600 h-8 w-8 p-2 rounded-full opacity-80 cursor-pointer hover:opacity-100"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between p-4 space-y-4 w-full">
                                <div>
                                    <h3 className="font-semibold text-lg">{product.name}</h3>
                                    <p className="text-gray-500 text-sm">{product.description}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="mt-2 text-blue-600 font-semibold">$ {product.price}</div>
                                    <div className="relative">
                                        <CiHeart
                                            className="text-3xl text-gray-500 hover:text-red-600 cursor-pointer absolute top-0 right-0"
                                            title="Add to favorites"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

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
