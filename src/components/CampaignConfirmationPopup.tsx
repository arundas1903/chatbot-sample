import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface CampaignConfirmationPopupProps {
  open: boolean;
  onClose: () => void;
  campaignData: {
    name: string;
    segment: string;
    channel: string;
    count: string;
    budget: string;
  };
}

export default function CampaignConfirmationPopup({
  open,
  onClose,
  campaignData,
}: CampaignConfirmationPopupProps) {
  const navigate = useNavigate();

  const handleRunCampaign = () => {
    // TODO: Implement campaign creation logic here
    console.log('Running campaign:', campaignData);
    navigate('/'); // Redirect to home page
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Confirm Campaign Details</DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Campaign Name
          </Typography>
          <Typography variant="body1">{campaignData.name}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Target Segment
          </Typography>
          <Typography variant="body1">{campaignData.segment}</Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Channel
          </Typography>
          <Typography variant="body1">{campaignData.channel.toUpperCase()}</Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Estimated Audience Count
          </Typography>
          <Typography variant="body1">{campaignData.count} users</Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            Estimated Budget
          </Typography>
          <Typography variant="body1">${campaignData.budget}</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleRunCampaign} variant="contained" color="primary">
          Run Campaign
        </Button>
      </DialogActions>
    </Dialog>
  );
} 