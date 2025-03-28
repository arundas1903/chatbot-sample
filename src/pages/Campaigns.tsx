import { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { Add as AddIcon, MoreVert as MoreVertIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface Campaign {
  id: string;
  name: string;
  channel: string;
  count: number;
  budget: number;
  scheduledTime: string;
}

const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Summer Sale 2024',
    channel: 'Email',
    count: 1000,
    budget: 5000,
    scheduledTime: '2024-06-01 10:00 AM',
  },
  {
    id: '2',
    name: 'Black Friday 2024',
    channel: 'SMS',
    count: 2000,
    budget: 10000,
    scheduledTime: '2024-11-29 12:00 PM',
  },
];

export default function Campaigns() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, campaign: Campaign) => {
    setAnchorEl(event.currentTarget);
    setSelectedCampaign(campaign);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedCampaign(null);
  };

  const handleEdit = () => {
    handleMenuClose();
    // Implement edit functionality
  };

  const handleDelete = () => {
    handleMenuClose();
    // Implement delete functionality
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      flex: 1,
      gap: 2,
      height: '100%'
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      }}>
        <Typography variant="h5" sx={{ fontWeight: 500 }}>Campaigns</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/create-campaign')}
          size="medium"
        >
          Create Campaign
        </Button>
      </Box>

      <TableContainer 
        component={Paper} 
        sx={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          borderRadius: 1,
          boxShadow: (theme) => theme.shadows[1]
        }}
      >
        <Table stickyHeader size="medium" sx={{ flex: 1 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '30%', fontWeight: 600, backgroundColor: 'background.paper' }}>Campaign Name</TableCell>
              <TableCell sx={{ width: '15%', fontWeight: 600, backgroundColor: 'background.paper' }}>Channel</TableCell>
              <TableCell align="right" sx={{ width: '10%', fontWeight: 600, backgroundColor: 'background.paper' }}>Count</TableCell>
              <TableCell align="right" sx={{ width: '15%', fontWeight: 600, backgroundColor: 'background.paper' }}>Budget</TableCell>
              <TableCell sx={{ width: '20%', fontWeight: 600, backgroundColor: 'background.paper' }}>Scheduled Time</TableCell>
              <TableCell align="right" sx={{ width: '10%', fontWeight: 600, backgroundColor: 'background.paper' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockCampaigns.map((campaign) => (
              <TableRow 
                key={campaign.id}
                hover
                sx={{ 
                  '&:last-child td, &:last-child th': { border: 0 },
                  cursor: 'pointer'
                }}
              >
                <TableCell sx={{ fontWeight: 500 }}>{campaign.name}</TableCell>
                <TableCell>{campaign.channel}</TableCell>
                <TableCell align="right">{campaign.count.toLocaleString()}</TableCell>
                <TableCell align="right">${campaign.budget.toLocaleString()}</TableCell>
                <TableCell>{campaign.scheduledTime}</TableCell>
                <TableCell align="right">
                  <IconButton 
                    size="small" 
                    onClick={(e) => handleMenuClick(e, campaign)}
                    sx={{ ml: 1 }}
                  >
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          elevation: 2,
          sx: { minWidth: 120 }
        }}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </Box>
  );
} 