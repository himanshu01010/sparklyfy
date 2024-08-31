import React from 'react';
import img1 from "../../assets/landingBg.png";
import logo from "../../assets/logo.png";
import img2 from "../../assets/Rectangle 21.png";
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const ModeratelyRoundedCard = styled(Card)(({ theme }) => ({
  borderRadius: '24px', // This creates a moderately rounded corner
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow
}));

const LandingPage = () => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto px-4 py-8 relative">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Customize Landing Page</h1>
          <div className="space-x-4">
            <button
              className="btn rounded-full px-10 text-xl hover:bg-amber-500"
              onClick={handleBack}
            >
              Back
            </button>
            <button className="btn rounded-full px-10 text-xl hover:bg-amber-500">
              Save
            </button>
          </div>
        </header>
        {/* Upper Image */}
        <div className="relative rounded-lg overflow-hidden">
          <img src={img1} alt="Background" className="w-full object-cover" />
        </div>
        {/* Overlapping Card */}
        <div className="relative">
          <ModeratelyRoundedCard className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 z-20 w-11/12 md:w-3/4 lg:w-1/3 mx-auto bg-white h-96">
            <CardContent className="text-center p-8">
              <img src={logo} alt="Sparklyfy logo" className="mx-auto mb-10 h-24" />
              <Typography  component="h2" sx={{fontWeight:"bold", fontSize:"40px"}}>
                Employee Appreciation Gift
              </Typography>
              <Typography variant="body1" className="mb-6">
                Redeem This Voucher At Any Of Our Partnered Merchants.
              </Typography>
              <button className="btn rounded-full px-10 py-2 text-lg bg-black text-white hover:bg-gray-800 transition duration-300 mt-10">
                Redeem Now
              </button>
            </CardContent>
          </ModeratelyRoundedCard>
        </div>
        {/* Lower Image */}
        <div className="relative mt-40 rounded-lg overflow-hidden z-10">
          <img src={img2} alt="Background" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;