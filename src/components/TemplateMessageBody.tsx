import React, { useState, useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import TemplateVariablePopup from './TemplateVariablePopup';

interface TemplateMessageBodyProps {
  content: string;
  disabled?: boolean;
  onChange?: (newContent: string) => void;
}

export default function TemplateMessageBody({ content, disabled, onChange }: TemplateMessageBodyProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedVariable, setSelectedVariable] = useState<{
    match: string;
    start: number;
    end: number;
  } | null>(null);

  const handleVariableClick = (event: React.MouseEvent<HTMLSpanElement>, match: string, start: number, end: number) => {
    if (!disabled) {
      setAnchorEl(event.currentTarget);
      setSelectedVariable({ match, start, end });
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedVariable(null);
  };

  const handleSelect = (value: string) => {
    if (selectedVariable && onChange) {
      const newContent = 
        content.substring(0, selectedVariable.start) +
        value +
        content.substring(selectedVariable.end);
      onChange(newContent);
    }
  };

  const renderContent = useCallback(() => {
    const regex = /\{\{(\d+)\}\}/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(content)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(
          <span key={`text-${lastIndex}`}>
            {content.substring(lastIndex, match.index)}
          </span>
        );
      }

      // Add the variable
      const variableText = match[0];
      const matchIndex = match.index;
      parts.push(
        <Typography
          key={`var-${matchIndex}`}
          component="span"
          sx={{
            color: 'primary.main',
            cursor: disabled ? 'default' : 'pointer',
            textDecoration: 'underline',
            '&:hover': {
              opacity: disabled ? 1 : 0.8,
            },
          }}
          onClick={(e) => handleVariableClick(e, variableText, matchIndex, matchIndex + variableText.length)}
        >
          {variableText}
        </Typography>
      );

      lastIndex = matchIndex + variableText.length;
    }

    // Add remaining text
    if (lastIndex < content.length) {
      parts.push(
        <span key={`text-${lastIndex}`}>
          {content.substring(lastIndex)}
        </span>
      );
    }

    return parts;
  }, [content, disabled]);

  return (
    <Box sx={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
      {renderContent()}
      <TemplateVariablePopup
        anchorEl={anchorEl}
        onClose={handleClose}
        onSelect={handleSelect}
      />
    </Box>
  );
} 