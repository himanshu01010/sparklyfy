import React, { useState } from 'react';
import { Box, Button, Typography, Grid, Paper, IconButton, Menu, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

const campaignData = [
  { name: 'Holi', startDate: '15-04-2025', endDate: '30-04-2025', status: 'Running' },
  { name: 'Holi', startDate: '15-04-2025', endDate: '30-04-2025', status: 'Running' },
  { name: 'Holi', startDate: '15-04-2025', endDate: '30-04-2025', status: 'Running' },
  { name: 'Holi', startDate: '15-04-2025', endDate: '30-04-2025', status: 'Running' },
  { name: 'Holi', startDate: '15-04-2025', endDate: '30-04-2025', status: 'Running' },
  { name: 'Holi', startDate: '15-04-2025', endDate: '30-04-2025', status: 'Running' },
  { name: 'Holi', startDate: '15-04-2025', endDate: '30-04-2025', status: 'Running' },
];

const Campaign = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const handleMenuOpen = (event, campaign) => {
    setAnchorEl(event.currentTarget);
    setSelectedCampaign(campaign);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedCampaign(null);
  };

  const handleView = () => {
    console.log('View campaign:', selectedCampaign);
    handleMenuClose();
  };

  const handleEdit = () => {
    console.log('Edit campaign:', selectedCampaign);
    handleMenuClose();
  };

  const createbtn = ()=>{
    navigate('/Campaign/Create')
  }

  return (
    <Box sx={{ bgcolor: 'black', minHeight: '100vh', color: 'white', p: 4 }}>
      <Typography variant="h3" fontWeight="bold" mb={4}>
        Campaign
      </Typography>
      <Paper sx={{ bgcolor: '#7e22ce', borderRadius: 3, mb: 6 }}>
        <Button
          fullWidth
          sx={{ py: 3, display: 'flex', flexDirection: 'column', color: 'white' }}
          onClick={createbtn}
        >
          <Typography variant="h4" fontWeight="bold">
            Create Campaign
          </Typography>
          <Box
            sx={{
              mt: 2,
              border: '2px solid white',
              borderRadius: 2,
              p: 1,
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AddIcon sx={{ fontSize: '2rem' }} />
          </Box>
        </Button>
      </Paper>
      <Typography variant="h4" mb={4}>
        Previous Campaign
      </Typography>
      <Grid container spacing={2} mb={2}>
        <Grid item xs={3}>
          <Typography variant="body1" sx={{fontSize:"30px",color: 'gray'}}>Campaign Name</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" sx={{fontSize:"30px", color: 'gray'}}>Start Date</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" sx={{fontSize:"30px", color: 'gray'}}>End Date</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1" sx={{fontSize:"30px", color: 'gray'}}>Status</Typography>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      {campaignData.map((campaign, index) => (
        <Paper
          key={index}
          sx={{
            bgcolor: '#18181b',
            borderRadius: 2,
            p: 2,
            mb: 2,
            '&:hover': {
              bgcolor: '#f59e0b', // Amber 500 equivalent
            },
            transition: 'background-color 0.3s',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body2" sx={{ color: 'white' , fontSize:"20px"}}>
                {campaign.name}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" sx={{ color: 'white', fontSize:"20px" }}>
                {campaign.startDate}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2" sx={{ color: 'white', fontSize:"20px" }}>
                {campaign.endDate}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" sx={{ color: 'white', fontSize:"20px" }}>
                {campaign.status}
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ textAlign: 'right' }}>
              <IconButton onClick={(event) => handleMenuOpen(event, campaign)}>
                <MoreVertIcon sx={{ color: 'white' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      ))}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleView}>View</MenuItem>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
      </Menu>
    </Box>
  );
};

export default Campaign;
