import React, { useState } from 'react';
import { Box, Button, Typography, Grid, Paper, IconButton, Menu, MenuItem, useTheme, useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';

const campaignData = [
  { name: 'Holi', startDate: '15-04-2025', endDate: '30-04-2025', status: 'Running' },
  { name: 'Diwali', startDate: '01-11-2025', endDate: '15-11-2025', status: 'Upcoming' },
  { name: 'Christmas', startDate: '20-12-2025', endDate: '26-12-2025', status: 'Planning' },
  // ... (other campaign data)
];

const Campaign = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

  const createbtn = () => {
    navigate('/Campaign/Create');
  };

  return (
    <Box sx={{ bgcolor: 'black', minHeight: '100vh', color: 'white', p: { xs: 2, sm: 4 } }}>
      <Typography variant="h3" fontWeight="bold" mb={4} fontSize={{ xs: '2rem', sm: '3rem' }}>
        Campaign
      </Typography>
      <Paper sx={{ bgcolor: '#7e22ce', borderRadius: 3, mb: 6 }}>
        <Button
          fullWidth
          sx={{ py: 3, display: 'flex', flexDirection: 'column', color: 'white' }}
          onClick={createbtn}
        >
          <Typography variant="h4" fontWeight="bold" fontSize={{ xs: '1.5rem', sm: '2rem' }}>
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
      <Typography variant="h4" mb={4} fontSize={{ xs: '1.5rem', sm: '2rem' }}>
        Previous Campaign
      </Typography>
      {!isMobile && (
        <Grid container spacing={2} mb={2}>
          <Grid item xs={3}>
            <Typography variant="body1" sx={{ fontSize: "1.5rem", color: 'gray' }}>Campaign Name</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" sx={{ fontSize: "1.5rem", color: 'gray' }}>Start Date</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1" sx={{ fontSize: "1.5rem", color: 'gray' }}>End Date</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1" sx={{ fontSize: "1.5rem", color: 'gray' }}>Status</Typography>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      )}
      {campaignData.map((campaign, index) => (
        <Paper
          key={index}
          sx={{
            bgcolor: '#18181b',
            borderRadius: 2,
            p: 2,
            mb: 2,
            '&:hover': {
              bgcolor: '#f59e0b',
            },
            transition: 'background-color 0.3s',
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={3}>
              <Typography variant="body2" sx={{ color: 'white', fontSize: { xs: '1rem', sm: '1.25rem' }, fontWeight: 'bold' }}>
                {campaign.name}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2" sx={{ color: 'white', fontSize: { xs: '0.875rem', sm: '1.25rem' } }}>
                {isMobile && <span style={{ color: 'gray', marginRight: '0.5rem' }}>Start:</span>}
                {campaign.startDate}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2" sx={{ color: 'white', fontSize: { xs: '0.875rem', sm: '1.25rem' } }}>
                {isMobile && <span style={{ color: 'gray', marginRight: '0.5rem' }}>End:</span>}
                {campaign.endDate}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Typography variant="body2" sx={{ color: 'white', fontSize: { xs: '0.875rem', sm: '1.25rem' } }}>
                {isMobile && <span style={{ color: 'gray', marginRight: '0.5rem' }}>Status:</span>}
                {campaign.status}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={1} sx={{ textAlign: 'right' }}>
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