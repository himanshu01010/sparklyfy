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
      navigate('/Home');
    }, 1000);
    
    return () => clearTimeout(tick);
  };

  const ModalContent = ({ img, alt, text }) => (
    <Box className="absolute inset-0 flex justify-center items-center bg-opacity-50 bg-black">
      <Box className="bg-white rounded-xl p-6 sm:p-10 md:p-16 lg:p-20 text-center">
        <Box className="flex justify-center items-center mb-4">
          <img src={img} alt={alt} className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-50 lg:h-50" />
        </Box>
        <Typography variant="h4" component="span" className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {text}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <div className="bg-black min-h-screen p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10">Send Reward Link</h1>
      <div>
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">Add Recipients</h2>
        <div className="bg-zinc-900 p-4 sm:p-6 rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 md:mb-10">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
            <button
              className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg md:text-xl font-semibold hover:bg-orange-500 transition-colors w-full sm:w-auto"
              onClick={handleBulkClick}
            >
              Send in Bulk
            </button>
            <button
              className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg md:text-xl font-semibold hover:bg-orange-500 transition-colors w-full sm:w-auto"
              onClick={handleIndi}
            >
              Send Individually
            </button>
          </div>
          {showUpload && (
            <div className="border-2 border-gray-400 bg-zinc-800 rounded-lg text-white transition-all p-6 sm:p-10 md:p-16 lg:p-20 text-center duration-500 ease-in-out cursor-pointer hover:border-gray-300 transition-colors">
              <input
                type="file"
                className="hidden"
                id="file-upload"
                accept=".csv,.xlsx"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <img src={img1} className='mx-auto mb-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20' />
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">Click to Upload a File</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">Support CSV and XLSX files</p>
              </label>
            </div>
          )}

          {showIndi && (
            <div className='p-4 sm:p-6 md:p-8 lg:p-10 mb-20 sm:mb-30 md:mb-40'>
              <input
                type="email"
                placeholder="xyz@gmail.com"
                className="w-full bg-zinc-700 border text-white border-white rounded-2xl sm:rounded-3xl px-4 py-3 sm:py-4 md:py-5 lg:py-7 text-lg sm:text-xl md:text-2xl lg:text-3xl placeholder:text-white"
              />
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-black px-4 sm:px-6 py-2 rounded-full text-base sm:text-lg font-semibold hover:bg-orange-500 transition-colors w-full sm:w-auto">
            Cancel
          </button>
          <button
            className="bg-white text-black px-4 sm:px-6 py-2 rounded-full text-base sm:text-lg font-semibold hover:bg-orange-500 transition-colors w-full sm:w-auto"
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