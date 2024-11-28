import { Box, styled, Typography } from '@mui/material';
import React from 'react';

const Description1 = '"Kovalty offers comprehensive project insights through advanced analytics and reporting tools. By analyzing key metrics and performance indicators, Kovalty enables teams to identify trends, pinpoint potential bottlenecks, and make data-driven decisions. These insights not only enhance project planning and execution but also optimize resource allocation and ensure projects meet their objectives efficiently."';

const StyledTitle = styled(Typography)`
  font-size: 26px;
  color: #222222;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    font-size: 22px;
    text-align: center;
  }
`;

const StyledInsightsContainer = styled(Box)`
  padding: 100px 30px 0px 30px;
  @media (max-width: 900px) {
    padding: 50px 30px 0px 30px;
  }
`;

const InsightTextContainer = ({
  title,
  description,
  bgColor,
}: {
  title: string;
  description: string;
  bgColor: string;
}) => (
  <Box 
    sx={{
      backgroundColor: bgColor,
      padding: '32px',
      '&:not(:last-child)': {
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }
    }}
  >
    {title && (
      <Typography 
        fontSize={28} 
        color="white" 
        sx={{ 
          mb: 2,
          fontWeight: 500
        }}
      >
        {title}
      </Typography>
    )}
    <Typography 
      fontSize={16} 
      color="white" 
      sx={{
        lineHeight: 1.6,
        opacity: 0.95
      }}
    >
      {description}
    </Typography>
  </Box>
);

const Insights = () => {
  return (
    <StyledInsightsContainer id="insights">
      <StyledTitle>Insights</StyledTitle>
      <Box 
        sx={{
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <InsightTextContainer
          bgColor="#7A6CCB"
          title="Insight 1"
          description={Description1}
        />
        <InsightTextContainer
          bgColor="#AD88C6"
          title="Insight 2"
          description={Description1}
        />
        <InsightTextContainer
          bgColor="#E9D3EB"
          title="Insight 3"
          description={Description1}
        />
      </Box>
    </StyledInsightsContainer>
  );
};

export default Insights;