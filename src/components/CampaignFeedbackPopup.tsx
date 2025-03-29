import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

interface CampaignFeedbackPopupProps {
  open: boolean;
  onClose: () => void;
  onFeedback: (isHelpful: boolean) => void;
}

export default function CampaignFeedbackPopup({
  open,
  onClose,
  onFeedback,
}: CampaignFeedbackPopupProps) {
  const handleFeedback = (isHelpful: boolean) => {
    onFeedback(isHelpful);
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Help Us Improve</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Was this AI campaign creation experience helpful?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
          <Button
            variant="outlined"
            color="success"
            startIcon={<ThumbUpIcon />}
            onClick={() => handleFeedback(true)}
            sx={{ minWidth: 120 }}
          >
            Yes
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<ThumbDownIcon />}
            onClick={() => handleFeedback(false)}
            sx={{ minWidth: 120 }}
          >
            No
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Skip</Button>
      </DialogActions>
    </Dialog>
  );
} 