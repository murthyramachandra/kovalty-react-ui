import { Box, Stack, styled, Typography } from "@mui/material";

const StyledTopBannerContainer = styled(Box)`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.901961) 30.5%,
    rgba(116, 105, 182, 0.541176) 70.5%
  );
  border-bottom: 1px solid #00000033;
  padding-top  : 150px;
  @media (max-width: 900px) {
    padding-top: 100px;
    background : none;
  }
`;

const LeftContentContainer = styled(Box)`
  max-width      : 60%;
  display        : flex;
  height         : 100%;
  flex-direction : column;
  justify-content: flex-end;
  align-items    : left;
  justify-content: center;
  margin-bottom  : 30px;
  padding        : 0px 30px;
  @media (max-width: 900px) {
    max-width      : 100%;
    padding        : 0px 15px;
    justify-content: left;
  }
`;

const ImageContainer = styled(Box)`
  max-width     : 40%;
  display       : flex;
  justifycontent: flex-end;
  alignitems    : center;
  display       : block;
  @media (max-width: 900px) {
    display  : none;
    max-width: 0%;
  }
`;

const StyledContentOne = styled(Typography)`
  font-size : 32px;
  color     : #ad88c6;
  text-align: left;
  @media (max-width: 900px) {
    font-size : 22px;
    text-align: left;
  }
`;

const StyledContentTwo = styled(Typography)`
  font-size : 18px;
  color     : #00000092;
  text-align: left;
  @media (max-width: 900px) {
    font-size : 16px;
    text-align: left;
  }
`;

const TopBanner = () => {
  return (
    <StyledTopBannerContainer id     = "home">
    <Stack                    height = "100%" flexDirection = "row" alignItems="center">
        <LeftContentContainer>
          <StyledContentOne
            fontWeight   = {600}
            marginBottom = {3}
          >
            Empowering Businesses Through Technology
          </StyledContentOne>
          <StyledContentTwo fontWeight = {400}>
            We envision a world where technology empowers businesses to reach their full potential. By harnessing our expertise and innovative mindset, we strive to become a trusted partner for organizations navigating the complexities of the digital age.
          </StyledContentTwo>
        </LeftContentContainer>
        <ImageContainer>
          <Box
            component = "img"
            src       = "/assets/TopBannerImage.png"
            alt       = "Kovalty Technologies"
            style     = {{ height: "100%", width: "100%" }}
          />
        </ImageContainer>
      </Stack>
    </StyledTopBannerContainer>
  );
};

export default TopBanner;
