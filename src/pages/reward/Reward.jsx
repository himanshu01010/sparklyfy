import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import amazon from "../../assets/img1.png";
import IKEA from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.png";
import img11 from "../../assets/img11.png";

const voucherImages = {
  "amazon": amazon,
  "IKEA": IKEA,
  "Levi's": img3,
  "ASOS": img4,
  "JYSK": img5,
  "Best Western": img6,
  "MANGO": img7,
  "XBOX": img8,
  "adidas": img9,
  "Nike": img10,
  "PlayStation": img11,
};

const Reward = () => {
  const navigate = useNavigate();
  const [customizeData, setCustomizeData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('customizeCatalogData');
    if (data) {
      setCustomizeData(JSON.parse(data));
    }
  }, []);

  const handleEdit = () => {
    navigate('/Campaign/Create/customize');
  }

  const handleLink = () => {
    navigate('/Reward/Link');
  }

  const handleView = () => {
    navigate('/Campaign/Create/customize')
  }

  const totalProducts = customizeData ? customizeData.vouchers.length : 0;

  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-8 lg:p-10 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 lg:mb-20">Send Reward Link</h1>
      <div className="bg-zinc-900 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 mb-4">
        <div className="flex justify-between items-center mb-4 p-4 sm:p-6 md:p-8 lg:p-10 bg-zinc-800 rounded-xl border border-white">
          <span className="text-xl sm:text-2xl md:text-3xl px-2 sm:px-4 md:px-6 lg:px-10">Select Campaign</span>
          {/* <ChevronUp size={20} /> */}
        </div>
        <div className="mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-2">Choose Campaign</h2>
          <div className="flex justify-between items-center p-4 sm:p-5 md:p-6 lg:p-7 bg-zinc-800 rounded-xl border border-white">
            <span className="text-lg sm:text-xl md:text-2xl">Diwali Campaign</span>
            <ChevronDown size={20} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8 md:mb-10">
          <span className="text-lg sm:text-xl md:text-2xl ml-2 sm:ml-5 mb-2 sm:mb-0">{totalProducts} Products USD: $2000</span>
          <button className="ml-2 sm:ml-7 bg-zinc-700 hover:bg-zinc-600 px-3 py-1 rounded" onClick={handleEdit}>Edit</button>
        </div>
        {customizeData && (
          <div className="mt-4 sm:mt-7">
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {customizeData.vouchers.map((voucher, index) => (
                <img
                  key={index}
                  src={voucherImages[voucher]}
                  alt={voucher}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover rounded-xl"
                />
              ))}
            </div>
            <button className='text-sky-500 mt-4' onClick={handleView}>View Details</button>
          </div>
        )}
      </div>
      <button className="btn w-full bg-white text-black rounded-full font-semibold text-lg sm:text-xl py-2 sm:py-3 mt-4 hover:bg-orange-500" onClick={handleLink}>
        Next
      </button>
    </div>
  );
};

export default Reward;