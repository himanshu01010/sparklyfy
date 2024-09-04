import React, { useState } from 'react';
import img1 from "../../assets/Vector.png";
import tick from "../../assets/tick.png";
import { Box, Typography, Button, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RewardLink = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [showIndi, setShowIndi] = useState(false);
  const [send, setSend] = useState(false);
  const navigate = useNavigate();

  const handleBulkClick = () => {
    setShowUpload(!showUpload);
    setShowIndi(false);
  };

  const handleIndi = () => {
    setShowIndi(!showIndi);
    setShowUpload(false);
  };

  const handleSend = () => {
    setSend(true);

    const tick = setTimeout(() => {
      setSend(false);
      navigate('/Home'); // Navigate to home page after the modal closes
    }, 1000);
    
    return () => clearTimeout(tick);
  };

  const ModalContent = ({ img, alt, text }) => (
    <Box className="absolute inset-0 flex justify-center items-center bg-opacity-50 bg-black">
      <Box className="bg-white rounded-xl p-20 text-center">
        <Box className="flex justify-center items-center mb-4">
          <img src={img} alt={alt} className="w-50 h-50" />
        </Box>
        <Typography variant="h4" component="span" className="font-bold">
          {text}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <div className="bg-black min-h-screen p-10">
      <h1 className="text-white text-4xl font-bold mb-10">Send Reward Link</h1>
      <div>
        <h2 className="text-white text-3xl mb-6">Add Recipients</h2>
        <div className="bg-zinc-900 p-6 rounded-3xl mb-10">
          <div className="flex space-x-4 mb-6">
            <button
              className="bg-white text-black px-6 py-3 rounded-full text-xl font-semibold hover:bg-orange-500 transition-colors"
              onClick={handleBulkClick}
            >
              Send in Bulk
            </button>
            <button
              className="bg-white text-black px-6 py-3 rounded-full text-xl font-semibold hover:bg-orange-500 transition-colors"
              onClick={handleIndi}
            >
              Send Individually
            </button>
          </div>
          {showUpload && (
            <div className="border-2 border border-gray-400 bg-zinc-800 rounded-lg text-white transition-all p-20 text-center duration-500 ease-in-out cursor-pointer hover:border-gray-300 transition-colors">
              <input
                type="file"
                className="hidden"
                id="file-upload"
                accept=".csv,.xlsx"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <img src={img1} className='mx-auto mb-4' />
                <p className="text-4xl mb-2">Click to Upload a File</p>
                <p className="text-xl text-gray-400">Support CSV and XLSX files</p>
              </label>
            </div>
          )}

          {showIndi && (
            <div className='p-10 mb-40'>
              <input
                type="email"
                placeholder="xyz@gmial.com"
                className="w-full bg-zinc-700 border text-white border-white rounded-3xl px-4 py-7 text-3xl placeholder:text-white"
              />
            </div>
          )}
        </div>
        <div className="flex justify-end space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-orange-500 transition-colors">
            Cancel
          </button>
          <button
            className="bg-white text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-orange-500 transition-colors"
            onClick={handleSend}
          >
            Send
          </button>

          <Modal open={send} aria-labelledby="done-modal" aria-describedby="process-payment">
            <ModalContent img={tick} alt="Done" text="Send Successful" />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default RewardLink;
