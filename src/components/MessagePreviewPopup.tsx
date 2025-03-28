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
    message: 'Hi! I saw your new product launch. When will it be available?'
  },
  {
    name: 'Jane Smith',
    message: 'Hello! I received my order #12345. Thanks for the quick delivery!'
  },
  {
    name: 'Mike Johnson',
    message: 'Hey there! I\'m interested in your loyalty program. Can you tell me more?'
  }
];

export default function MessagePreviewPopup({
  anchorEl,
  onClose,
  onSelectMessage,
}: MessagePreviewPopupProps) {
  const handleMessageClick = (message: string) => {
    onSelectMessage(message);
    onClose();
  };

  return (
    <Popover
      open={Boolean(anchorEl)}
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
      <Box sx={{ p: 2, maxWidth: 400 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Sample Messages</Typography>
          <IconButton size="small" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        {sampleMessages.map((msg, index) => (
          <Paper
            key={index}
            sx={{
              p: 2,
              mb: 2,
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
            onClick={() => handleMessageClick(msg.message)}
          >
            <Typography variant="subtitle2" color="primary" gutterBottom>
              {msg.name}
            </Typography>
            <Typography variant="body2">
              {msg.message}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Popover>
  );
} 