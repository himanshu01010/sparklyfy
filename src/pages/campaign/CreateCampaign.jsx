import React, { useEffect, useState } from 'react';
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

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [customizeData, setCustomizeData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('customizeCatalogData');
    if (data) {
      setCustomizeData(JSON.parse(data));
    }
  }, []);

  const customizeCatalog = () => {
    navigate('/Campaign/Create/customize');
  };

  const landingPage = () => {
    localStorage.setItem('landingPage', 'true');
    navigate('/Campaign/Create/landingPage');
  };

  return (
    <div className="bg-black text-white p-4 sm:p-6 md:p-10 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 sm:mb-20">Create Campaign</h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl mb-5">Campaign Details</h2>
      <div className="space-y-6 sm:space-y-10">
        <div className="bg-zinc-800 rounded-lg p-4 sm:p-7 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Name Your Campaign</h3>
            <p className="text-sm sm:text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
          <input
            type="text"
            placeholder="Write Campaign Name"
            className="bg-white text-black rounded-full px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-1/3 text-lg sm:text-xl md:text-2xl"
          />
        </div>
        <div className="bg-zinc-800 rounded-lg p-4 sm:p-7 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Customize Catalog</h3>
            <p className="text-sm sm:text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            {customizeData && (
              <div>
                <p className='font-bold text-lg sm:text-xl md:text-2xl mt-4 sm:mt-7'>
                  {customizeData.count} Product {customizeData.denomination} : Rs {customizeData.amount}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-7">
                  {customizeData.vouchers.map((voucher, index) => (
                    <img key={index} src={voucherImages[voucher]} alt={voucher} className="w-50 rounded-xl h-50 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover" />
                  ))}
                </div>
              </div>
            )}
          </div>
          <button className="btn rounded-full text-base sm:text-lg md:text-xl px-6 sm:px-10 py-2 sm:py-3 hover:bg-amber-500 mt-4 sm:mt-0" onClick={customizeCatalog}>Customize</button>
        </div>
        <div className="bg-zinc-800 rounded-lg p-4 sm:p-7 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">Landing Page</h3>
            <p className="text-sm sm:text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
          <button className="btn rounded-full text-base sm:text-lg md:text-xl px-6 sm:px-10 py-2 sm:py-3 hover:bg-amber-500" onClick={landingPage}>Add</button>
        </div>
      </div>
      <div className="mt-20 sm:mt-40 flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="btn rounded-full text-base sm:text-lg md:text-xl px-6 sm:px-10 py-2 sm:py-3 hover:bg-amber-500 w-full sm:w-auto">Cancel</button>
        <button className="btn rounded-full text-base sm:text-lg md:text-xl px-6 sm:px-10 py-2 sm:py-3 hover:bg-amber-500 w-full sm:w-auto">Save</button>
      </div>
    </div>
  );
};

export default CreateCampaign;