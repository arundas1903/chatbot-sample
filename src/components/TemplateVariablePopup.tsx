import { useState } from 'react';
import {
  Box,
  Popover,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';

interface TemplateVariablePopupProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onSelect: (value: string) => void;
}

const sampleValues = [
  'Customer Name',
  'Order Number',
  'Tracking Link',
  'Product Name',
  'Order Date',
  'Custom Value'
];

export default function TemplateVariablePopup({ anchorEl, onClose, onSelect }: TemplateVariablePopupProps) {
  const [selectedValue, setSelectedValue] = useState('');
  const [customValue, setCustomValue] = useState('');
  const open = Boolean(anchorEl);

  const handleSelect = (value: string) => {
    if (value === 'Custom Value') {
      return;
    }
    onSelect(value);
    onClose();
  };

  const handleCustomValueSubmit = () => {
    if (customValue) {
      onSelect(customValue);
      onClose();
    }
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <Box sx={{ p: 2, width: 250 }}>
        <FormControl fullWidth size="small" sx={{ mb: 2 }}>
          <InputLabel>Select Value</InputLabel>
          <Select
            value={selectedValue}
            label="Select Value"
            onChange={(e) => {
              setSelectedValue(e.target.value);
              handleSelect(e.target.value);
            }}
          >
            {sampleValues.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedValue === 'Custom Value' && (
          <TextField
            fullWidth
            size="small"
            label="Enter custom value"
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleCustomValueSubmit();
              }
            }}
          />
        )}
      </Box>
    </Popover>
  );
} 