import { useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Pagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { sampleTemplates } from '../data/sampleTemplates';

export default function SampleTemplates() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const totalPages = Math.ceil(sampleTemplates.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentTemplates = sampleTemplates.slice(startIndex, endIndex);

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Sample Templates</Typography>
      
      <Paper sx={{ width: '100%', height: 'calc(100vh - 180px)', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Rows per page</InputLabel>
            <Select
              value={rowsPerPage.toString()}
              label="Rows per page"
              onChange={handleChangeRowsPerPage}
            >
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TableContainer sx={{ flex: 1, overflow: 'auto' }}>
          <Table stickyHeader size="medium">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: '20%', fontWeight: 600 }}>Name</TableCell>
                <TableCell sx={{ width: '15%', fontWeight: 600 }}>Category</TableCell>
                <TableCell sx={{ width: '25%', fontWeight: 600 }}>Description</TableCell>
                <TableCell sx={{ width: '25%', fontWeight: 600 }}>Prompt</TableCell>
                <TableCell sx={{ width: '15%', fontWeight: 600 }}>Use Case</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentTemplates.map((template) => (
                <TableRow 
                  key={template.id}
                  hover
                  sx={{ 
                    '&:last-child td, &:last-child th': { border: 0 },
                    cursor: 'pointer'
                  }}
                >
                  <TableCell sx={{ fontWeight: 500 }}>{template.name}</TableCell>
                  <TableCell>{template.category}</TableCell>
                  <TableCell>{template.description}</TableCell>
                  <TableCell sx={{ fontFamily: 'monospace' }}>{template.prompt}</TableCell>
                  <TableCell>{template.useCase}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', borderTop: 1, borderColor: 'divider' }}>
          <Pagination 
            count={totalPages} 
            page={page} 
            onChange={handleChangePage}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
          />
        </Box>
      </Paper>
    </Box>
  );
} 