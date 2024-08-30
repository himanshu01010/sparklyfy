import React from 'react';
import { Box, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import img1 from "../assets/emp.png"
import img2 from "../assets/gift.png"
import img3 from "../assets/wallet.png"
import img4 from "../assets/claim.png"

const StatCard = ({ image, value, label, color }) => (
  <Paper elevation={3} sx={{ p: 2, bgcolor: color, color: 'white', borderRadius: 2 }}>
    <Box display="flex" alignItems="center">
      <Avatar sx={{ bgcolor: 'white', width: 56, height: 56 }}>
        <img src={image} alt={label} style={{ width: '60%', height: '60%' }} />
      </Avatar>
      <Box ml={5}>
        <Typography variant="h4" fontWeight="bold">{value}</Typography>
        <Typography variant="h5">{label}</Typography>
      </Box>
    </Box>
  </Paper>
);

const Dashboard = () => {
  const stats = [
    { image: img1, value: '2200', label: 'Total Employees', color: '#ff9800' },
    { image: img2, value: '2100', label: 'Total Gift Send', color: '#9c27b0' },
    { image: img2, value: '100', label: 'Total Gift Cancel', color: '#03a9f4' },
    { image: img3, value: '20,000', label: 'Balance', color: '#4caf50' },
    { image: img4, value: '1536', label: 'Total Claim', color: '#673ab7' },
  ];

  const giftData = [
    { id: '01', recipient: 'Vipin', team: 'Creative', phone: '0123-456-789', email: 'xyz@gmail.com', giftSend: '$948.55' },
    { id: '01', recipient: 'Vipin', team: 'Creative', phone: '0123-456-789', email: 'xyz@gmail.com', giftSend: '$948.55' },
    { id: '01', recipient: 'Vipin', team: 'Creative', phone: '0123-456-789', email: 'xyz@gmail.com', giftSend: '$948.55' },
    { id: '01', recipient: 'Vipin', team: 'Creative', phone: '0123-456-789', email: 'xyz@gmail.com', giftSend: '$948.55' },
    { id: '01', recipient: 'Vipin', team: 'Creative', phone: '0123-456-789', email: 'xyz@gmail.com', giftSend: '$948.55' },
    { id: '01', recipient: 'Vipin', team: 'Creative', phone: '0123-456-789', email: 'xyz@gmail.com', giftSend: '$948.55' },
  ];

  return (
    <Box sx={{ p: 3, bgcolor: '#121212', color: 'white', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>Welcome, Vipin</Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.slice(0, 4).map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard {...stats[4]} />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Last Gift Sent</Typography>
        <Box>
          <IconButton sx={{ color: 'white' }}>
            <Typography variant="body2" sx={{ mr: 1 }}>Sort</Typography>
            <SortIcon />
          </IconButton>
          <IconButton sx={{ color: 'white' }}>
            <Typography variant="body2" sx={{ mr: 1 }}>Filter</Typography>
            <FilterListIcon />
          </IconButton>
        </Box>
      </Box>
      <TableContainer component={Paper} sx={{ bgcolor: '#1e1e1e', borderRadius: '16px' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>ID</TableCell>
              <TableCell sx={{ color: 'white' }}>Recipient</TableCell>
              <TableCell sx={{ color: 'white' }}>Team</TableCell>
              <TableCell sx={{ color: 'white' }}>Phone No</TableCell>
              <TableCell sx={{ color: 'white' }}>Email</TableCell>
              <TableCell sx={{ color: 'white' }}>Gift Send</TableCell>
              <TableCell sx={{ color: 'white' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {giftData.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell sx={{ color: 'white' }}>{row.id}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.recipient}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.team}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.phone}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.email}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.giftSend}</TableCell>
                <TableCell>
                  <IconButton sx={{ color: 'white' }}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;