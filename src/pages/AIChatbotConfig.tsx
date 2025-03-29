import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { whatsappNumbers } from '../data/whatsappNumbers';

interface WhatsAppConfig {
  businessNumber: string;
  agentNumber: string;
}

export default function AIChatbotConfig() {
  const [configurations, setConfigurations] = useState<WhatsAppConfig[]>([]);

  const handleAddConfiguration = () => {
    setConfigurations(prev => [
      ...prev,
      {
        businessNumber: whatsappNumbers[0],
        agentNumber: '',
      }
    ]);
  };

  const handleDeleteConfiguration = (index: number) => {
    setConfigurations(prev => prev.filter((_, i) => i !== index));
  };

  const handleBusinessNumberChange = (index: number, value: string) => {
    setConfigurations(prev => 
      prev.map((config, i) => 
        i === index 
          ? { ...config, businessNumber: value }
          : config
      )
    );
  };

  const handleAgentNumberChange = (index: number, value: string) => {
    setConfigurations(prev => 
      prev.map((config, i) => 
        i === index 
          ? { ...config, agentNumber: value }
          : config
      )
    );
  };

  const handleSubmit = () => {
    // Here you would typically make an API call to save all configurations
    console.log('Saving configurations:', configurations);
  };

  const isFormValid = configurations.length > 0 && configurations.every(config => config.agentNumber);

  return (
    <Container maxWidth="lg" sx={{ height: '100%', py: 4 }}>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Typography variant="h4" sx={{ mb: 4 }}>AI Chatbot Configuration</Typography>
        
        <Paper sx={{ p: 4, height: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>WhatsApp Business Number Configuration</Typography>
            <Typography variant="body2" color="text.secondary">
              Configure agent phone numbers for each WhatsApp business number. Changes will be saved when you click the Save button below.
            </Typography>
          </Box>
          
          <Box sx={{ flex: 1, overflow: 'auto', mb: 3 }}>
            <TableContainer>
              <Table size="medium" sx={{ '& .MuiTableCell-root': { borderBottom: 'none' } }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ width: '35%', fontWeight: 600 }}>Business Number</TableCell>
                    <TableCell sx={{ width: '45%', fontWeight: 600 }}>Agent Phone Number</TableCell>
                    <TableCell sx={{ width: '20%', fontWeight: 600 }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {configurations.map((config, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <FormControl fullWidth>
                          <InputLabel>Business Number</InputLabel>
                          <Select
                            value={config.businessNumber}
                            label="Business Number"
                            onChange={(e) => handleBusinessNumberChange(index, e.target.value)}
                          >
                            {whatsappNumbers.map((number) => (
                              <MenuItem key={number} value={number}>
                                {number}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        <TextField
                          fullWidth
                          label="Agent Phone Number"
                          value={config.agentNumber}
                          onChange={(e) => handleAgentNumberChange(index, e.target.value)}
                          placeholder="Enter agent phone number"
                          helperText="Enter the phone number that will handle customer messages"
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton 
                          onClick={() => handleDeleteConfiguration(index)}
                          color="error"
                          size="small"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <Button
                startIcon={<AddIcon />}
                onClick={handleAddConfiguration}
                variant="outlined"
                size="large"
              >
                Add Configuration
              </Button>
            </Box>
          </Box>

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end',
            borderTop: '1px solid',
            borderColor: 'divider',
            pt: 3
          }}>
            <Button 
              variant="contained" 
              onClick={handleSubmit}
              disabled={!isFormValid}
              size="large"
            >
              Save All Configurations
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
} 