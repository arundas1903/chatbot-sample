import { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  SelectChangeEvent,
  Button,
  IconButton,
  Tooltip,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TemplateMessageBody from '../components/TemplateMessageBody';
import MessagePreviewPopup from '../components/MessagePreviewPopup';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CampaignConfirmationPopup from '../components/CampaignConfirmationPopup';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Mock data for dropdowns
const segments = [
  { id: 'all', name: 'All Customers' },
  { id: 'shopify_new', name: 'New Shopify Customers' },
  { id: 'shopify_repeat', name: 'Repeat Shopify Customers' },
  { id: 'shopify_abandoned', name: 'Abandoned Cart Customers' },
];

const smsTemplates = [
  { id: 'template1', name: 'Promotional Template 1' },
  { id: 'template2', name: 'Promotional Template 2' },
];

const senderIds = [
  { id: 'sender1', name: 'SENDER1' },
  { id: 'sender2', name: 'SENDER2' },
];

const waBusinessNumbers = [
  { id: 'wa1', name: '+1234567890' },
  { id: 'wa2', name: '+0987654321' },
];

const waTemplates = [
  { 
    id: 'watemplate1', 
    name: 'WhatsApp Template 1',
    body: 'Hello {{1}},\n\nThank you for shopping with us! Your order #{{2}} has been confirmed and will be shipped within 2 business days.\n\nBest regards,\nYour Store Team'
  },
  { 
    id: 'watemplate2', 
    name: 'WhatsApp Template 2',
    body: 'Hi {{1}},\n\nYour order #{{2}} has been shipped! Track your package using this link: {{3}}\n\nQuestions? Reply to this message and we\'ll help you out!'
  },
];

const aiPromptTemplates = [
  { 
    id: 'new_product',
    name: 'New Product Launch',
    prompt: 'Run an SMS campaign to all my customers about my new product {{product}}'
  },
  {
    id: 'abandoned_cart',
    name: 'Abandoned Cart Recovery',
    prompt: 'Create a WhatsApp campaign for customers who abandoned their cart in the last {{days}} days'
  },
  {
    id: 'seasonal_sale',
    name: 'Seasonal Sale',
    prompt: 'Create a promotional campaign for my {{season}} sale offering {{discount}}% off on all products'
  },
  {
    id: 'loyalty_rewards',
    name: 'Loyalty Program',
    prompt: 'Send a message to customers who have made more than {{count}} purchases about our loyalty rewards program'
  },
];

// Add mock AI-suggested audiences
const aiSuggestedAudiences = [
  { id: 'high_value', name: 'High Value Customers (Spent > $1000)' },
  { id: 'frequent', name: 'Frequent Shoppers (>5 orders)' },
  { id: 'recent', name: 'Recent Customers (Last 30 days)' },
];

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`campaign-tabpanel-${index}`}
      aria-labelledby={`campaign-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

interface CampaignForm {
  segment: string;
  campaignName: string;
  channel: 'sms' | 'whatsapp' | '';
  senderId: string;
  template: string;
  messageBody: string;
  waBusinessNumber: string;
  waTemplate: string;
  aiPrompt: string;
  selectedPromptTemplate: string;
  aiChannel: 'sms' | 'whatsapp' | '';
  aiAudience: string;
  aiCount: string;
  scheduledTime: Date | null;
}

export default function CreateCampaign() {
  const [tabValue, setTabValue] = useState(0);
  const [aiStep, setAiStep] = useState(1);
  const [formData, setFormData] = useState<CampaignForm>({
    segment: '',
    campaignName: '',
    channel: '',
    senderId: '',
    template: '',
    messageBody: '',
    waBusinessNumber: '',
    waTemplate: '',
    aiPrompt: '',
    selectedPromptTemplate: '',
    aiChannel: '',
    aiAudience: '',
    aiCount: '1000',
    scheduledTime: null,
  });
  const [previewAnchorEl, setPreviewAnchorEl] = useState<HTMLElement | null>(null);
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleFormChange = (field: keyof CampaignForm) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    const value = event.target.value;
    setFormData((prev) => {
      // If changing WhatsApp template, update message body
      if (field === 'waTemplate') {
        const selectedTemplate = waTemplates.find(template => template.id === value);
        return {
          ...prev,
          [field]: value,
          messageBody: selectedTemplate?.body || ''
        };
      }
      
      // Reset channel-specific fields when channel changes
      if (field === 'channel') {
        return {
          ...prev,
          [field]: value as CampaignForm['channel'],
          senderId: '',
          template: '',
          messageBody: '',
          waBusinessNumber: '',
          waTemplate: '',
        };
      }

      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const handlePromptTemplateChange = (event: SelectChangeEvent) => {
    const selectedTemplate = aiPromptTemplates.find(template => template.id === event.target.value);
    setFormData(prev => ({
      ...prev,
      selectedPromptTemplate: event.target.value,
      aiPrompt: selectedTemplate?.prompt || prev.aiPrompt
    }));
  };

  const isFormValid = () => {
    const commonFields = formData.segment && formData.campaignName && formData.channel;
    
    if (formData.channel === 'sms') {
      return commonFields && formData.senderId && formData.messageBody;
    }
    
    if (formData.channel === 'whatsapp') {
      return commonFields && formData.waBusinessNumber && formData.waTemplate;
    }
    
    return false;
  };

  const handlePublish = () => {
    // Calculate budget based on audience count and channel
    const costPerMessage = formData.channel === 'sms' ? 0.05 : 0.10; // Example costs
    const budget = (parseInt(formData.aiCount) * costPerMessage).toFixed(2);

    setConfirmationOpen(true);
  };

  const handleNext = () => {
    if (aiStep === 1) {
      setAiStep(2);
    } else if (aiStep === 2) {
      setAiStep(3);
    }
  };

  const handleBack = () => {
    if (aiStep === 2) {
      setAiStep(1);
    } else if (aiStep === 3) {
      setAiStep(2);
    }
  };

  const handlePreviewClick = (event: React.MouseEvent<HTMLElement>) => {
    setPreviewAnchorEl(event.currentTarget);
  };

  const handlePreviewClose = () => {
    setPreviewAnchorEl(null);
  };

  const handleMessageSelect = (message: string) => {
    setFormData(prev => ({
      ...prev,
      messageBody: message
    }));
  };

  const isSMSChannel = (channel: string): channel is 'sms' => channel === 'sms';

  const handleCreateCampaign = () => {
    // Calculate budget based on audience count and channel
    const costPerMessage = formData.aiChannel === 'sms' ? 0.05 : 0.10; // Example costs
    const budget = (parseInt(formData.aiCount) * costPerMessage).toFixed(2);

    setConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    setConfirmationOpen(false);
  };

  const renderAiCampaignStep1 = () => (
    <Box sx={{ width: '100%' }}>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Pre-created Prompts</InputLabel>
        <Select
          value={formData.selectedPromptTemplate}
          label="Pre-created Prompts"
          onChange={handlePromptTemplateChange}
        >
          <MenuItem value="">
            <em>Select a prompt template</em>
          </MenuItem>
          {aiPromptTemplates.map((template) => (
            <MenuItem key={template.id} value={template.id}>
              {template.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>Campaign Prompt</Typography>
        <TextField
          fullWidth
          multiline
          rows={6}
          value={formData.aiPrompt}
          onChange={handleFormChange('aiPrompt')}
          placeholder="Describe your campaign requirements..."
          sx={{ 
            '& .MuiInputBase-root': {
              fontFamily: 'monospace',
            }
          }}
        />
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
          {`Use {{variable}} syntax to define placeholders that will be replaced with actual values.`}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          disabled={!formData.aiPrompt.trim()}
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );

  const renderAiCampaignStep2 = () => (
    <Box sx={{ width: '100%' }}>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Channel</InputLabel>
        <Select
          value={formData.aiChannel}
          label="Channel"
          onChange={handleFormChange('aiChannel')}
        >
          <MenuItem value="sms">SMS</MenuItem>
          <MenuItem value="whatsapp">WhatsApp</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Target Audience</InputLabel>
        <Select
          value={formData.aiAudience}
          label="Target Audience"
          onChange={handleFormChange('aiAudience')}
        >
          <MenuItem value="">
            <em>Select an audience</em>
          </MenuItem>
          <Typography variant="subtitle2" sx={{ px: 2, py: 1, color: 'text.secondary' }}>
            Predefined Segments
          </Typography>
          {segments.map((segment) => (
            <MenuItem key={segment.id} value={segment.id}>
              {segment.name}
            </MenuItem>
          ))}
          <Typography variant="subtitle2" sx={{ px: 2, py: 1, color: 'text.secondary' }}>
            AI Suggested Audiences
          </Typography>
          {aiSuggestedAudiences.map((audience) => (
            <MenuItem key={audience.id} value={audience.id}>
              {audience.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Estimated Audience Count"
        type="number"
        value={formData.aiCount}
        InputProps={{
          readOnly: true,
        }}
        sx={{ 
          mb: 3,
          '& .MuiInputBase-root': {
            backgroundColor: 'action.hover'
          }
        }}
      />

      <DateTimePicker
        label="Schedule Time (Optional)"
        value={formData.scheduledTime}
        onChange={(newValue: Date | null) => {
          setFormData(prev => ({
            ...prev,
            scheduledTime: newValue
          }));
        }}
        sx={{ width: '100%', mb: 3 }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="outlined"
          size="large"
          onClick={handleBack}
          sx={{ mr: 2 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          disabled={!formData.aiChannel || !formData.aiAudience}
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );

  const renderAiCampaignStep3 = () => (
    <Box sx={{ width: '100%' }}>
      <TextField
        fullWidth
        label="Campaign Name"
        value={formData.campaignName}
        onChange={handleFormChange('campaignName')}
        sx={{ mb: 3 }}
      />

      {formData.aiChannel === 'sms' && (
        <>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Sender ID</InputLabel>
            <Select
              value={formData.senderId}
              label="Sender ID"
              onChange={handleFormChange('senderId')}
            >
              {senderIds.map((sender) => (
                <MenuItem key={sender.id} value={sender.id}>
                  {sender.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Template</InputLabel>
            <Select
              value={formData.template}
              label="Template"
              onChange={handleFormChange('template')}
            >
              {smsTemplates.map((template) => (
                <MenuItem key={template.id} value={template.id}>
                  {template.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography variant="subtitle2">Message Body</Typography>
              <Tooltip title="Preview AI-generated messages">
                <IconButton
                  size="small"
                  onClick={handlePreviewClick}
                  sx={{ ml: 1, color: 'primary.main' }}
                >
                  <SmartToyIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <TextField
              fullWidth
              multiline
              rows={6}
              value={formData.messageBody}
              onChange={handleFormChange('messageBody')}
              sx={{ 
                '& .MuiInputBase-root': {
                  fontFamily: 'monospace',
                }
              }}
            />
            {formData.aiChannel === 'sms' && (
              <MessagePreviewPopup
                anchorEl={previewAnchorEl}
                onClose={handlePreviewClose}
                onSelectMessage={handleMessageSelect}
              />
            )}
          </Box>
        </>
      )}

      {formData.aiChannel === 'whatsapp' && (
        <>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>WA Business Number</InputLabel>
            <Select
              value={formData.waBusinessNumber}
              label="WA Business Number"
              onChange={handleFormChange('waBusinessNumber')}
            >
              {waBusinessNumbers.map((number) => (
                <MenuItem key={number.id} value={number.id}>
                  {number.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Template Name</InputLabel>
            <Select
              value={formData.waTemplate}
              label="Template Name"
              onChange={handleFormChange('waTemplate')}
            >
              {waTemplates.map((template) => (
                <MenuItem key={template.id} value={template.id}>
                  {template.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Typography variant="subtitle2">Message Body</Typography>
            </Box>
            <TextField
              fullWidth
              multiline
              rows={6}
              value={formData.messageBody}
              InputProps={{
                readOnly: true,
              }}
              sx={{ 
                '& .MuiInputBase-root': {
                  fontFamily: 'monospace',
                  backgroundColor: 'action.hover'
                }
              }}
            />
          </Box>
        </>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          size="large"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          disabled={!formData.campaignName || (formData.aiChannel === 'sms' && (!formData.senderId || !formData.messageBody)) || (formData.aiChannel === 'whatsapp' && (!formData.waBusinessNumber || !formData.waTemplate))}
          onClick={handleCreateCampaign}
        >
          Create Campaign
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Create Campaign</Typography>
      
      <Paper sx={{ width: '100%', height: 'calc(100vh - 180px)', display: 'flex', flexDirection: 'column' }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="campaign type tabs"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Traditional Campaign" />
          <Tab label="AI Campaign" />
        </Tabs>

        <Box sx={{ flex: 1, overflow: 'auto' }}>
          <TabPanel value={tabValue} index={0}>
            <Box sx={{ width: '100%' }}>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Segment</InputLabel>
                <Select
                  value={formData.segment}
                  label="Segment"
                  onChange={handleFormChange('segment')}
                >
                  {segments.map((segment) => (
                    <MenuItem key={segment.id} value={segment.id}>
                      {segment.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                label="Campaign Name"
                value={formData.campaignName}
                onChange={handleFormChange('campaignName')}
                sx={{ mb: 3 }}
              />

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Channel</InputLabel>
                <Select
                  value={formData.channel}
                  label="Channel"
                  onChange={handleFormChange('channel')}
                >
                  <MenuItem value="sms">SMS</MenuItem>
                  <MenuItem value="whatsapp">WhatsApp</MenuItem>
                </Select>
              </FormControl>

              {formData.channel === 'sms' && (
                <>
                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel>Sender ID</InputLabel>
                    <Select
                      value={formData.senderId}
                      label="Sender ID"
                      onChange={handleFormChange('senderId')}
                    >
                      {senderIds.map((sender) => (
                        <MenuItem key={sender.id} value={sender.id}>
                          {sender.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel>Template</InputLabel>
                    <Select
                      value={formData.template}
                      label="Template"
                      onChange={handleFormChange('template')}
                    >
                      {smsTemplates.map((template) => (
                        <MenuItem key={template.id} value={template.id}>
                          {template.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Typography variant="subtitle2">Message Body</Typography>
                    </Box>
                    <TextField
                      fullWidth
                      multiline
                      rows={6}
                      value={formData.messageBody}
                      onChange={handleFormChange('messageBody')}
                      sx={{ 
                        '& .MuiInputBase-root': {
                          fontFamily: 'monospace',
                        }
                      }}
                    />
                  </Box>
                </>
              )}

              {formData.channel === 'whatsapp' && (
                <>
                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel>WA Business Number</InputLabel>
                    <Select
                      value={formData.waBusinessNumber}
                      label="WA Business Number"
                      onChange={handleFormChange('waBusinessNumber')}
                    >
                      {waBusinessNumbers.map((number) => (
                        <MenuItem key={number.id} value={number.id}>
                          {number.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel>Template Name</InputLabel>
                    <Select
                      value={formData.waTemplate}
                      label="Template Name"
                      onChange={handleFormChange('waTemplate')}
                    >
                      {waTemplates.map((template) => (
                        <MenuItem key={template.id} value={template.id}>
                          {template.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Typography variant="subtitle2">Message Body</Typography>
                    </Box>
                    <TextField
                      fullWidth
                      multiline
                      rows={6}
                      value={formData.messageBody}
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{ 
                        '& .MuiInputBase-root': {
                          fontFamily: 'monospace',
                          backgroundColor: 'action.hover'
                        }
                      }}
                    />
                  </Box>
                </>
              )}
            </Box>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            {aiStep === 1 ? renderAiCampaignStep1() : 
             aiStep === 2 ? renderAiCampaignStep2() : 
             renderAiCampaignStep3()}
          </TabPanel>
        </Box>

        <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider', backgroundColor: 'background.paper' }}>
          {tabValue === 0 && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={!isFormValid()}
              onClick={handlePublish}
            >
              Publish Campaign
            </Button>
          )}
        </Box>
      </Paper>

      <CampaignConfirmationPopup
        open={confirmationOpen}
        onClose={handleConfirmationClose}
        campaignData={{
          name: formData.campaignName,
          segment: formData.segment,
          channel: formData.channel,
          count: formData.aiCount,
          budget: (parseInt(formData.aiCount) * (formData.channel === 'sms' ? 0.05 : 0.10)).toFixed(2),
        }}
      />
    </Box>
  );
} 