import React from 'react';
import { Box, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Avatar, ButtonBase, useMediaQuery, useTheme } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/emp.png";
import img2 from "../assets/gift.png";
import img3 from "../assets/wallet.png";
import img4 from "../assets/claim.png";

const StatCard = ({ image, value, label, color, onClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        width: '100%',
        display: 'block',
        textAlign: 'left',
        borderRadius: 2,
        '&:hover': {
          opacity: 0.85,
        },
      }}
    >
      <Paper elevation={3} sx={{ p: isMobile ? 1 : 2, bgcolor: color, color: 'white', borderRadius: 2 }}>
        <Box display="flex" alignItems="center">
          <Avatar sx={{ bgcolor: 'white', width: isMobile ? 40 : 56, height: isMobile ? 40 : 56 }}>
            <img src={image} alt={label} style={{ width: '60%', height: '60%' }} />
          </Avatar>
          <Box ml={isMobile ? 2 : 5}>
            <Typography variant={isMobile ? "h6" : "h4"} fontWeight="bold">{value}</Typography>
            <Typography variant={isMobile ? "body1" : "h5"}>{label}</Typography>
          </Box>
        </Box>
      </Paper>
    </ButtonBase>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleClick = (stat) => {
    navigate(stat.path);
  };

  const stats = [
    { image: img1, value: '2200', label: 'Total Employees', color: '#ff9800', path: '/totalEmployees' },
    { image: img2, value: '2100', label: 'Total Gift Send', color: '#9c27b0', path: '/totalGiftSend' },
    { image: img2, value: '100', label: 'Total Gift Cancel', color: '#03a9f4', path: '/totalGiftCancel' },
    { image: img3, value: '20,000', label: 'Balance', color: '#4caf50', path: '/balance' },
    { image: img4, value: '1536', label: 'Total Claim', color: '#673ab7', path: '/totalClaim' },
  ];

  const giftData = [
    { id: '01', recipient: 'Vipin', team: 'Creative', phone: '0123-456-789', email: 'xyz@gmail.com', giftSend: '$948.55', status: 'pending' },
    { id: '02', recipient: 'John', team: 'Marketing', phone: '0123-456-790', email: 'abc@gmail.com', giftSend: '$750.00', status: 'Done' },
    { id: '03', recipient: 'Sara', team: 'Design', phone: '0123-456-791', email: 'def@gmail.com', giftSend: '$1200.00', status: 'pending' },
    { id: '04', recipient: 'Mike', team: 'Development', phone: '0123-456-792', email: 'ghi@gmail.com', giftSend: '$500.00', status: 'Done' },
    { id: '05', recipient: 'Emily', team: 'HR', phone: '0123-456-793', email: 'jkl@gmail.com', giftSend: '$800.00', status: 'pending' },
    { id: '06', recipient: 'Alex', team: 'Sales', phone: '0123-456-794', email: 'mno@gmail.com', giftSend: '$1500.00', status: 'Done' },
  ];

  return (
    <Box sx={{ p: isMobile ? 2 : 3, bgcolor: '#121212', color: 'white', minHeight: '100vh' }}>
      <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>Welcome, Vipin</Typography>
      <Grid container spacing={isMobile ? 2 : 3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <StatCard {...stat} onClick={() => handleClick(stat)} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexDirection: isMobile ? 'column' : 'row' }}>
        <Typography variant={isMobile ? "h6" : "h5"} sx={{ mb: isMobile ? 2 : 0 }}>Last Gift Sent</Typography>
        <Box>
          <IconButton sx={{ color: 'white' }}>
            <Typography variant="body2" sx={{ mr: 1, display: { xs: 'none', sm: 'inline' } }}>Sort</Typography>
            <SortIcon />
          </IconButton>
          <IconButton sx={{ color: 'white' }}>
            <Typography variant="body2" sx={{ mr: 1, display: { xs: 'none', sm: 'inline' } }}>Filter</Typography>
            <FilterListIcon />
          </IconButton>
        </Box>
      </Box>
      <TableContainer component={Paper} sx={{ bgcolor: '#1e1e1e', borderRadius: '16px', overflowX: 'auto' }}>
        <Table sx={{ minWidth: isMobile ? 300 : isTablet ? 500 : 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>ID</TableCell>
              <TableCell sx={{ color: 'white' }}>Recipient</TableCell>
              {!isMobile && (
                <>
                  <TableCell sx={{ color: 'white' }}>Team</TableCell>
                  {!isTablet && (
                    <>
                      <TableCell sx={{ color: 'white' }}>Phone No</TableCell>
                      <TableCell sx={{ color: 'white' }}>Email</TableCell>
                    </>
                  )}
                </>
              )}
              <TableCell sx={{ color: 'white' }}>Gift Send</TableCell>
              <TableCell sx={{ color: 'white' }}>Status</TableCell>
              <TableCell sx={{ color: 'white' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {giftData.map((row, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell sx={{ color: 'white' }}>{row.id}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.recipient}</TableCell>
                {!isMobile && (
                  <>
                    <TableCell sx={{ color: 'white' }}>{row.team}</TableCell>
                    {!isTablet && (
                      <>
                        <TableCell sx={{ color: 'white' }}>{row.phone}</TableCell>
                        <TableCell sx={{ color: 'white' }}>{row.email}</TableCell>
                      </>
                    )}
                  </>
                )}
                <TableCell sx={{ color: 'white' }}>{row.giftSend}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.status}</TableCell>
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