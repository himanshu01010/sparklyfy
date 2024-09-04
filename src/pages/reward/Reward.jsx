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
    // Retrieve saved data from localStorage
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
  const handleView = ()=>{
    navigate('/Campaign/Create/customize')
  }

  // Calculate total products
  const totalProducts = customizeData ? customizeData.vouchers.length : 0;

  return (
    <div className="bg-black text-white p-10 h-full mx-auto">
      <h1 className="text-4xl font-bold mb-20">Send Reward Link</h1>
      
      <div className="bg-zinc-900 rounded-lg p-10 mb-4">
        <div className="flex justify-between items-center mb-4 p-10 bg-zinc-800 rounded-xl border border-white">
          <span className="text-3xl px-10">Select Campaign</span>
          {/* <ChevronUp size={20} /> */}
        </div>
        
        <div className="mb-4">
          <h2 className="text-3xl mb-2">Choose Campaign</h2>
          <div className="flex justify-between items-center p-7 bg-zinc-800 rounded-xl border border-white">
            <span className="text-2xl">Diwali Campaign</span>
            <ChevronDown size={20} />
          </div>
        </div>
        
        <div className="flex items-center mb-10">
          <span className="text-2xl ml-5">{totalProducts} Products USD: $2000</span>
          <button className="ml-7" onClick={handleEdit}>Edit</button>
        </div>

        {customizeData && (
          <div className="flex space-x-4 mt-7">
            {customizeData.vouchers.map((voucher, index) => (
              <img 
                key={index} 
                src={voucherImages[voucher]} 
                alt={voucher} 
                className="w-50 h-50 object-cover rounded-2xl" 
              />
            ))}
            <button className='text-sky-500' onClick={handleView}>View Details</button>
          </div>
        )}
        
      </div>

      
      <button className="btn w-full bg-white text-black rounded font-semibold rounded-full text-xl hover:bg-orange-500" onClick={handleLink}>
        Next
      </button>
    </div>
  );
};

export default Reward;
