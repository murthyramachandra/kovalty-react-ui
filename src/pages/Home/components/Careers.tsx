import { Mail } from '@mui/icons-material';
import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react'

const StyledCareersContainer = styled(Box)`
  padding: 100px 30px 0px 30px;
  @media (max-width: 900px) {
    padding: 50px 30px 0px 30px;
  }
`;

const StyledTitle = styled(Typography)`
  font-size: 26px;
  color: #222222;
  @media (max-width: 900px) {
    font-size: 22px;
    text-align: center;
  }
`;

const ContentImageWrapper = styled(Box)`
  margin-top:30px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px; 
  @media (max-width: 900px) {
    padding-left: 25px;
    gap: 15px;
  }
`;

const StyledContent = styled(Typography)`
  font-size: 24px;
  color: black;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;

const ImageContainer = styled(Box)`
  width: 75%;
  display: block;
  @media (max-width: 900px) {
    width: 80%;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  margin-left:auto;
  margin-right:auto;
  background-color: #7A6CCB;
  color: white;
  width:250px;
  height:50px;
  dispaly:flex;
  align-items: center;
  justify-content: center;
`;

const StyledLinkButton = styled('a')`
  margin-top: 20px;
  margin-left:auto;
  margin-right:auto;
  padding: 10px 30px;
  background-color: #7A6CCB;
  color: white;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  border-radius:5px;
  @media(max-width:900px){
    padding:5px 20px;
  }
`;
const Careers = () => {
  return (
    <StyledCareersContainer id="careers">
      <StyledTitle>Careers</StyledTitle>
      <ContentImageWrapper>
        <StyledContent>Everyone has an opportunity to grow in their career through our Kovalty</StyledContent>
        <ImageContainer>
          <Box
            component="img"
            src="/assets/Carrers_Img.png"
            alt="Kovalty Technologies"
            style={{ height: "100%", width: "100%" }}
          />
        </ImageContainer>
        {/* <StyledButton variant="contained">
          Explore Careers
          </StyledButton> */}
        <StyledLinkButton href="mailto:info@kovalty.com">
          Explore Carrers
        </StyledLinkButton>
      </ContentImageWrapper>

    </StyledCareersContainer>
  );
}

export default Careers;
