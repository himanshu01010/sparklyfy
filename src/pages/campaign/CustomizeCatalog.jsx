import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.png";
import img11 from "../../assets/img11.png";

const CustomizeCatalog = () => {
  const [selectedVouchers, setSelectedVouchers] = useState([]);
  const [voucherCount, setVoucherCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve saved data from localStorage
    const savedData = localStorage.getItem('customizeCatalogData');
    if (savedData) {
      const { vouchers } = JSON.parse(savedData);
      setSelectedVouchers(vouchers);
      setVoucherCount(vouchers.length);
    }
  }, []);

  const handleSave = () => {
    const selectedData = {
      vouchers: selectedVouchers,
      country: 'India',
      denomination: 'INR',
      amount: '2000',
      count: voucherCount
    };
    localStorage.setItem('customizeCatalogData', JSON.stringify(selectedData));
    navigate(-1);
  };

  const giftVouchers = [
    { name: 'amazon', logo: img1 },
    { name: 'IKEA', logo: img2 },
    { name: 'Levi\'s', logo: img3 },
    { name: 'ASOS', logo: img4 },
    { name: 'JYSK', logo: img5 },
    { name: 'Best Western', logo: img6 },
    { name: 'MANGO', logo: img7 },
    { name: 'XBOX', logo: img8 },
    { name: 'adidas', logo: img9 },
    { name: 'Nike', logo: img10 },
    { name: 'PlayStation', logo: img11 },
  ];

  const handleSelectVoucher = (name) => {
    if (selectedVouchers.includes(name)) {
      setSelectedVouchers(selectedVouchers.filter(voucher => voucher !== name));
      setVoucherCount(voucherCount - 1);
    } else {
      setSelectedVouchers([...selectedVouchers, name]);
      setVoucherCount(voucherCount + 1);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-black text-white p-10 h-full">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Customize Catalog</h1>
        <div className="space-x-4">
          <button className="btn text-black bg-white rounded-full hover:bg-orange-500 text-lg" onClick={handleBack}>Back</button>
          <button className="btn bg-white text-black rounded-full hover:bg-orange-500 text-lg" onClick={handleSave}>Save</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-lg mb-2">Country</label>
          <div className="relative">
            <select className="select w-full bg-gray-800 border-white text-white appearance-none">
              <option>India</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-lg mb-2">Denomination</label>
            <div className="relative">
              <select className="select w-full bg-gray-800 border-white text-white appearance-none">
                <option>INR</option>
              </select>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-lg mb-2">&nbsp;</label>
            <input type="text" className="input w-full bg-gray-800 border-white text-white" value="2000" readOnly />
          </div>
        </div>
        <div>
          <label className="block text-lg mb-2">Product Category</label>
          <div className="relative">
            <select className="select w-full bg-gray-800 border-white text-white appearance-none">
              <option>All</option>
            </select>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-4">Select Gift Vouchers</h2>
      <div className="grid grid-cols-5 gap-4 bg-zinc-900 p-20 rounded-lg">
        {giftVouchers.map((voucher, index) => {
          const isSelected = selectedVouchers.includes(voucher.name);

          return (
            <div
              key={index}
              className={`relative w-full cursor-pointer transition duration-300 rounded-lg overflow-hidden ${
                isSelected ? 'shadow-lg shadow-orange-500' : ''
              }`}
              onClick={() => handleSelectVoucher(voucher.name)}
            >
              <img src={voucher.logo} alt={voucher.name} className="w-full h-full object-cover" />
              {isSelected && (
                <div className="absolute top-2 right-2 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">&#10003;</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomizeCatalog;
