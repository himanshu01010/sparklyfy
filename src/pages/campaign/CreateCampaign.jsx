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
    // Retrieve saved data from localStorage
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
    <div className="bg-black text-white p-10 min-h-screen">
      <h1 className="text-4xl font-semibold mb-20">Create Campaign</h1>
      
      <h2 className="text-3xl mb-5">Campaign Details</h2>
      
      <div className="space-y-10">
        <div className="bg-zinc-800 rounded-lg p-7 flex justify-between items-center">
          <div>
            <h3 className="text-3xl font-semibold">Name Your Campaign</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
          <input
            type="text"
            placeholder="Write Campaign Name"
            className="bg-white text-black rounded-full px-6 py-5 w-1/4 text-2xl"
          />
        </div>

        <div className="bg-zinc-800 rounded-lg p-7 flex justify-between items-center">
          <div>
            <h3 className="text-3xl font-semibold">Customize Catalog</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            {customizeData && (
              <div>
                {/* <p>Country: {customizeData.country}</p> */}
                <p className='text-bold text-2xl mt-7'>{customizeData.count} Product {customizeData.denomination} : Rs {customizeData.amount}</p>
                {/* <p>Selected Vouchers:</p> */}
                <div className="flex space-x-4 mt-7">
                  {customizeData.vouchers.map((voucher, index) => (
                    <img key={index} src={voucherImages[voucher]} alt={voucher} className="w-50 h-50 object-cover" />
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <button className="btn rounded-full text-xl px-10 hover:bg-amber-500" onClick={customizeCatalog}>Customize</button>
        </div>

        <div className="bg-zinc-800 rounded-lg p-7 flex justify-between items-center">
          <div>
            <h3 className="text-3xl font-semibold">Landing Page</h3>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          </div>
          
          <button className="btn rounded-full text-xl px-10 hover:bg-amber-500" onClick={landingPage}>Add</button>
        </div>
      </div>

      <div className="mt-40 flex justify-end space-x-4">
        <button className="btn rounded-full text-xl px-10 hover:bg-amber-500">Cancel</button>
        <button className="btn rounded-full px-10 text-xl hover:bg-amber-500">Save</button>
      </div>
    </div>
  );
};

export default CreateCampaign;
