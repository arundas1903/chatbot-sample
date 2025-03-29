import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Layout from './components/Layout';
import Campaigns from './pages/Campaigns';
import CreateCampaign from './pages/CreateCampaign';
import SampleTemplates from './pages/SampleTemplates';
import AIChatbotConfig from './pages/AIChatbotConfig';
import { Description, Campaign, Add, SmartToy } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const menuItems = [
    {
      text: 'Campaigns',
      icon: <Campaign />,
      path: '/',
    },
    {
      text: 'Create Campaign',
      icon: <Add />,
      path: '/create-campaign',
    },
    {
      text: 'Sample Templates',
      icon: <Description />,
      path: '/sample-templates',
    },
    {
      text: 'AI Chatbot Config',
      icon: <SmartToy />,
      path: '/ai-chatbot-config',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Router>
          <Layout menuItems={menuItems}>
            <Routes>
              <Route path="/" element={<Campaigns />} />
              <Route path="/create-campaign" element={<CreateCampaign />} />
              <Route path="/sample-templates" element={<SampleTemplates />} />
              <Route path="/ai-chatbot-config" element={<AIChatbotConfig />} />
            </Routes>
          </Layout>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
