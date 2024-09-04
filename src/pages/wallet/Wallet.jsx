import React, { useState } from 'react';
import img1 from "../../assets/balance.png";
import { useNavigate } from 'react-router-dom';

const AddCash = () => {
  const [currentBalance, setCurrentBalance] = useState(2000);
  const [addAmount, setAddAmount] = useState(5000);
  const amounts = [1000, 2000, 3000, 4000, 5000, 10000, 20000];
  const naviagte = useNavigate();

  const handleApproval = ()=>{
    naviagte('/Wallet/Approval');

  }

  const handleAmountClick = (amount) => {
    setAddAmount(amount);
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setAddAmount(parseInt(value) || 0);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between p-10">
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Add Cash</h1>
          <div className="bg-white rounded-full px-7 py-2 flex items-center">
            <div className="bg-black rounded-full w-16 h-16 flex items-center mr-2 justify-center">
              <img src={img1} alt="Icon" className="w-7 h-7" />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-3xl text-black">${currentBalance}</span>
              <span className="text-md text-black">Current Balance</span>
            </div>
          </div>
        </div>

        <div className="bg-zinc-800 rounded-lg p-7 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-zinc-400 text-3xl">Add to Current Balance</span>
            <span className="text-2xl font-bold">${addAmount}</span>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          {amounts.map((amount) => (
            <button
              key={amount}
              className="bg-white text-black text-xl rounded-full py-2 px-4 hover:bg-orange-500 transition-colors"
              onClick={() => handleAmountClick(amount)}
            >
              ${amount.toLocaleString()}
            </button>
          ))}
        </div>
      </div>

      <button className="w-full bg-white text-black rounded-full text-xl mb-10 py-3 hover:bg-orange-500 transition-colors" onClick={handleApproval}>
        Get Approval
      </button>
    </div>
  );
};

export default AddCash;
