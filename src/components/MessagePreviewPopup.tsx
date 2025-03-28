import React from 'react';
import {
  Box,
  Popover,
  Typography,
  IconButton,
  Paper,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface MessagePreviewPopupProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onSelectMessage: (message: string) => void;
}

const sampleMessages = [
  {
    name: 'John Doe',
    message: 'Hi John! 🎉 We\'re excited to announce our new summer collection! Check out our latest styles at [link]. Use code SUMMER20 for 20% off!'
  },
  {
    name: 'Sarah Smith',
    message: 'Hello Sarah! 🌟 Your personalized shopping experience awaits! We\'ve curated items just for you based on your preferences. Shop now: [link]'
  },
  {
    name: 'Mike Johnson',
    message: 'Hey Mike! 🛍️ Your cart is waiting! Don\'t miss out on these amazing deals. Complete your purchase now and get free shipping!'
  }
];

export default function MessagePreviewPopup({ anchorEl, onClose, onSelectMessage }: MessagePreviewPopupProps) {
  const open = Boolean(anchorEl);

  const handleMessageClick = (message: string) => {
    onSelectMessage(message);
    onClose();
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Box sx={{ p: 2, width: 320 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">AI Message Preview</Typography>
          <IconButton size="small" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {sampleMessages.map((sample, index) => (
          <Paper
            key={index}
            onClick={() => handleMessageClick(sample.message)}
            sx={{
              p: 2,
              mb: 2,
              backgroundColor: '#f5f5f5',
              borderRadius: 2,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
            }}
          >
            <Typography variant="subtitle2" sx={{ mb: 1, color: 'primary.main' }}>
              {sample.name}
            </Typography>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
              {sample.message}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Popover>
  );
} 