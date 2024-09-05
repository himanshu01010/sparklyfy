import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Typography, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import tick from "../../assets/tick.png";
import img1 from "../../assets/waitEmoji.png";
import img2 from "../../assets/done.png";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
});

const ModalContent = ({ img, alt, text }) => (
  <Box className="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-black">
    <Box className="bg-white rounded-xl p-4 sm:p-8 md:p-12 lg:p-20 text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-4">
      <Box className="flex justify-center items-center mb-4">
        <img src={img} alt={alt} className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-50 lg:h-50" />
      </Box>
      <Typography variant="h5" component="span" className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
        {text}
      </Typography>
    </Box>
  </Box>
);

const AddCash = () => {
  const navigate = useNavigate();
  const [showApproval, setShowApproval] = useState(true);
  const [showDone, setShowDone] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowApproval(false);
      setShowDone(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sec = setTimeout(() => {
      setShowDone(false);
      setShow(true);
    }, 2000);
    return () => clearTimeout(sec);
  }, []);

  const handleProceed = () => {
    navigate('/Home');
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="bg-black min-h-screen flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 relative">
        <Typography variant="h4" component="h1" className="text-white font-bold mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Add Cash
        </Typography>
        {show && (
          <Box className="flex-grow flex justify-center items-center">
            <Box className="bg-white w-full sm:w-3/4 md:w-2/3 lg:w-1/3 h-64 sm:h-72 md:h-80 lg:h-96 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 text-center shadow-lg">
              <img src={tick} alt="Payment Successful" className="mx-auto mt-8 sm:mt-12 md:mt-16 mb-4 sm:mb-6 md:mb-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32" />
              <Typography variant="h4" component="span" className="text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Payment Successful
              </Typography>
            </Box>
          </Box>
        )}
        <Modal open={showApproval} aria-labelledby="approval-modal" aria-describedby="waiting-for-approval">
          <ModalContent img={img1} alt="Approval" text="Wait for Approval" />
        </Modal>
        <Modal open={showDone} aria-labelledby="done-modal" aria-describedby="payment-done">
          <ModalContent img={img2} alt="Done" text="Done" />
        </Modal>
        <button 
          className='btn text-black rounded-3xl hover:bg-orange-600 w-full mb-8 sm:mb-12 md:mb-16 lg:mb-28 text-base sm:text-lg md:text-xl mt-4 sm:mt-6 md:mt-8 py-2 sm:py-3 md:py-4' 
          onClick={handleProceed}
        >
          Done
        </button>
      </Box>
    </ThemeProvider>
  );
};

export default AddCash;