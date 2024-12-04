
"use client";

import React, { useState } from 'react';
import { AiOutlineMessage } from "react-icons/ai";
// import ModalImage from '../../modal/imagemulti/[id]/page'
import { FaSave, FaShareAltSquare, FaMapMarkedAlt } from "react-icons/fa";
import { MdReport } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import AllProduct from "../../../component/product/allproduct/Page"

// function Detailcategory() {
export default function Detailcategory() {

  const product = [
    {
      id: 1,
      name: "Electronics",
      image: "https://images.khmer24.co/22-12-12/397539-7-bedrooms-villa-available-for-rent-in-boeng-tumpun-area-1670824538-21713017-b.jpg",
      subproduct: [
        { id: 1, image: "https://images.khmer24.co/24-11-25/s---223339173251595075988533-b.jpg" },
        { id: 2, image: "https://images.khmer24.co/24-11-11/s-sony-a6300--719712173130195411594680-b.jpg" },
        { id: 3, image: "https://images.khmer24.co/24-11-22/s-1bedroom-apartment-for-rent-in-toul-kork-693454173225498147720775-b.jpg" },
        { id: 4, image: "https://images.khmer24.co/24-10-16/s-villa-available-for-rent-in-boeng-tompon-area-298604172904860299478235-b.jpg" },
        { id: 5, image: "https://images.khmer24.co/24-06-12/s--house-for-sale--1037663171816268546319111-b.jpg" }
      ],
      description: `
      ក្រុមហ៊ុនយើងខ្ញុំត្រូវការជ្រើសរើសបុគ្គលិកផ្នែកលក់ដូចខាងក្រោម 
      - មានបទពិសោធន៍ជាអ្នកលក់យ៉ាងតិច២ឆ្នាំ បើធ្លាប់លក់តាមឡានរឹតតែប្រសើរ
      - ចេះបើកបររថយន្ត និង មានប័ណ្ណបើកបរ 
      - អាចចុះលក់តាមខេត្តបាន ឬ មានចំណង់ចំណូលចិត្តដើរតាមខេត្ត
      - មានបទពិសោធន៍ជាអ្នកលក់យ៉ាងតិច២ឆ្នាំ បើធ្លាប់លក់តាមឡានរឹតតែប្រសើរ
      - ចេះបើកបររថយន្ត និង មានប័ណ្ណបើកបរ 
      - អាចចុះលក់តាមខេត្តបាន ឬ មានចំណង់ចំណូលចិត្តដើរតាមខេត្ត
      1. ការរៀបចំជារៀងរាល់ថ្ងៃនៃស្តង់ថ្នាំលាបមុនពេលចាប់ផ្ដើមការងារ`

    }
  ];



  const [message, setMessage] = useState("");

  // Handler to update the state when the textarea value changes
  const handleMessageChange = (event: any) => {
    const newMessage = event.target.value;
    setMessage(newMessage); // Update state with the new value
    console.log(newMessage); // Log the value to the console
  };

  const sendMessage = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage(""); // Clear the textarea after sending
    }
  };


  return (
    <div className="body relative">
      <div className="body_div space-y-4">
        <div className="flex gap-4 p-8  h-[1536px] overflow-y-auto ">
          <div className="flex-1 overflow-hidden overflow-y-auto scrollbar-hidden">
            <div className='bg-white shadow border'>
              <div className="relative w-full h-[640px]">
                <img
                  src={product[0].image}
                  alt="Product"
                  className="object-cover h-full w-full"
                />
              </div>
              {/* <div className="border bg-gray-400">
                <div className="flex">
                  {product[0].subproduct.slice(0, showAllSubproducts ? product[0].subproduct.length : 3).map(sub => (
                    <div key={sub.id} onClick={handleOpenModal}>
                      <img className='h-16 w-16 border-2' src={sub.image} alt={`Subproduct ${sub.id}`} />
                    </div>
                  ))}
                </div>
              </div> */}
              <div className="p-4">
                <h1 className="text-xl font-semibold text-gray-800">{product[0].name}</h1>
                <p className="text-lg text-gray-700 mt-2">Price: $150</p>
                <p className="text-sm text-gray-600 mt-2">AD ID: 11641687 · 23 minutes ago</p>
                <pre className="text-sm leading-loose text-gray-600 space-y-3">{product[0].description}</pre>
              </div>
            </div>
            <div className="p-4 shadow bg-white mt-4">
              <div className="bg-white p-4 mb-4 border-b-2">
                <h2 className="text-lg font-semibold text-gray-800">Location</h2>
                <p className="text-sm text-gray-600">
                  #239H, St. 6, Preak Leap, Chroy Changvar, Phnom Penh, Cambodia
                </p>
                <button className="bg-gray-300 text-gray-500 py-2 mt-2 rounded  w-full flex items-center justify-center gap-2 px-14">
                  <FaMapMarkedAlt /> <span>Show on Google Map</span>
                </button>
              </div>

              <div className="flex items-center gap-4 my-4 justify-between">
                <button className="bg-gray-200 text-gray-500 px-4 py-2 text-center rounded flex items-center justify-center w-full">
                  <FaSave className="mr-2" /> Save
                </button>
                <button className="bg-gray-200 text-gray-500 px-4 py-2 text-center rounded flex items-center justify-center w-full">
                  <MdReport className="mr-2" /> Report
                </button>
                <button className="bg-gray-200 text-gray-500 px-4 py-2 text-center rounded flex items-center justify-center w-full">
                  <FaShareAltSquare className="mr-2" /> Share
                </button>
              </div>

            </div>

            <div className="bg-white p-4 rounded shadow mt-2 border-l-4  border-orange-500">
              <h3 className="font-semibold text-orange-500">ការទទួលសុពលភាព / Disclaimer</h3>
              <p className="text-sm text-gray-700">
                យើងខ្ញុំមិនត្រួតពិនិត្យមាតិកាដែលបង្ហោះដោយសមាជិកទេ។
              </p>
              <p className="text-sm text-gray-500">
                We do not control the content posted by members and disclaim any liability.
              </p>
            </div>
            <div className="flex items-center bg-white p-4 rounded shadow mt-3">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div className="ml-4">
                <h4 className="text-gray-800 font-medium">Mut Nakry</h4>
                <p className="text-sm text-gray-500">Member Since 19, Jul 2022</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">View Profile</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Follow</button>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow mt-2">
              <p className="font-NotoSansKhmer text-lg">Comment</p>
              <div className="py-4 relative flex items-center">
                <div
                  className="bg-gray-300 rounded-full cursor-pointer"
                  title="View Profile"
                >
                  <img
                    className="rounded-full w-12 h-12"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
                    alt="User Avatar"
                  />
                </div>
                <input
                  className="w-full ml-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Type your message here..."
                />
                <IoMdSend
                  className="ml-2 w-16 text-blue-500 text-4xl cursor-pointer"
                  onClick={sendMessage}
                  title="Send Message"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4  space-y-4 ">
            <div className='shadow'>
              <div className="space-y-2">
                <div className="flex items-center bg-blue-500 p-2">
                  <img
                    src="https://images.khmer24.co/stores/logos/24-06-12/s-10309668f7c8d4abf1d931c113292502501718167576942116556259.jpg"
                    alt="Seller Image"
                    className="rounded-full w-12 h-12 object-cover mr-2"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Teddy Cattery</h3>
                    <p className="text-sm text-gray-600">@Teddy21</p>
                  </div>
                </div>
                <div className='p-3'>
                  <a href="tel:015511xxx" className="text-blue-500">Call: 015511923823</a>
                  <br />
                  <a href="tel:015511xxx" className="text-blue-500">Call: 015511923823</a>
                  <p className="text-sm text-gray-600">Location: Phnom Penh</p>
                </div>
              </div>

              {/* Google Map iframe */}
              <div className="w-full h-48  p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=...&q=11.5365,104.9033"
                  width="100%"
                  height="100%"
                  className=""
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Chat Button */}
            <div className="flex justify-center">
              <button className="bg-orange-500 text-white py-2 px-4 rounded-full w-full mt-4 items-center justify-center flex">
                <AiOutlineMessage className="mr-2" />
                <span>Chat</span>
              </button>
            </div>

            {/* Safety tips */}
            <div className="bg-orange-100 p-4 rounded-lg text-sm text-gray-700">
              <ul className="list-disc pl-4 space-y-1">
                <li>Do not send money before receiving the goods.</li>
                <li>Check the item before you buy.</li>
                <li>Payment after receiving the goods.</li>
                <li>Meet the seller at a safe location.</li>
              </ul>
            </div>
            <div className="flex justify-center p-4">
              <div className='w-[300px] h-[600px]'>
                <img className='w-[300px] h-[600px]' src="https://www.khmer24.ws/www/delivery/ai.php?filename=frame_job_copy.jpg&contenttype=jpeg" alt="" />
              </div>
            </div>

          </div>
        </div>
        <div>
          <AllProduct/>
        </div>
      </div>
      {/* {isOpen && <ModalImage onClose={handleCloseModal} />} */}

    </div>
  );
}
