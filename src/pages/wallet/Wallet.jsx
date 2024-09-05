import React, { useState } from 'react';
import img1 from "../../assets/balance.png";
import { useNavigate } from 'react-router-dom';

const AddCash = () => {
  const [currentBalance, setCurrentBalance] = useState(2000);
  const [addAmount, setAddAmount] = useState(5000);
  const amounts = [1000, 2000, 3000, 4000, 5000, 10000, 20000];
  const navigate = useNavigate();

  const handleApproval = () => {
    navigate('/Wallet/Approval');
  }

  const handleAmountClick = (amount) => {
    setAddAmount(amount);
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setAddAmount(parseInt(value) || 0);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10">
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">Add Cash</h1>
          <div className="bg-white rounded-full px-4 sm:px-7 py-2 flex items-center">
            <div className="bg-black rounded-full w-12 sm:w-16 h-12 sm:h-16 flex items-center mr-2 justify-center">
              <img src={img1} alt="Icon" className="w-5 sm:w-7 h-5 sm:h-7" />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-xl sm:text-3xl text-black">${currentBalance}</span>
              <span className="text-sm sm:text-md text-black">Current Balance</span>
            </div>
          </div>
        </div>
        <div className="bg-zinc-800 rounded-lg p-4 sm:p-7 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-zinc-400 text-xl sm:text-3xl">Add to Current Balance</span>
            <span className="text-xl sm:text-2xl font-bold">${addAmount}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
          {amounts.map((amount) => (
            <button
              key={amount}
              className="bg-white text-black text-sm sm:text-base md:text-lg lg:text-xl rounded-full py-1 sm:py-2 px-2 sm:px-4 hover:bg-orange-500 transition-colors"
              onClick={() => handleAmountClick(amount)}
            >
              ${amount.toLocaleString()}
            </button>
          ))}
        </div>
      </div>
      <button 
        className="w-full bg-white text-black rounded-full text-lg sm:text-xl mb-6 sm:mb-10 py-2 sm:py-3 hover:bg-orange-500 transition-colors" 
        onClick={handleApproval}
      >
        Get Approval
      </button>
    </div>
  );
};

export default AddCash;