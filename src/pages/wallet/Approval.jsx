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
      setShow(true); // Correctly set `show` to true after 2000ms
    }, 2000);

    return () => clearTimeout(sec);
  }, []);

  const handleProceed = () => {
    navigate('/Home');
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="bg-black min-h-screen flex flex-col p-10 relative">
        <Typography variant="h4" component="h1" className="text-white font-bold mb-6">
          Add Cash
        </Typography>

        {show && ( // Correct conditional rendering using &&
          <Box className="flex-grow flex justify-center items-center">
            <Box className="bg-white w-1/3 h-96 rounded-3xl p-10 text-center shadow-lg">
              <img src={tick} alt="Payment Successful" className="mx-auto mt-16 mb-8" />
              <Typography variant="h4" component="span" className="text-black font-bold">
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

        <button className='btn text-black rounded-3xl hover:bg-orange-600 w-full mb-28 text-xl mt-8' onClick={handleProceed}>Done</button>
      </Box>
    </ThemeProvider>
  );
};

export default AddCash;
