import { Box, Card, CardContent, CardMedia, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const DescriptionOne =
  "At Kovalty team, we are passionate about transforming ideas into robust web solutions. With a focus on creativity and technical expertise, we strive to exceed client expectations through personalized service and a collaborative approach to every project.";

const DescriptionTwo =
  "Kovalty specializes in providing staffing and customized software solutions for enterprise clients, guided by core values of learning, innovation, quality, and customer satisfaction. Our skilled team, with extensive expertise across technology domains, helps us meet client needs and drive impactful results. We focus on delivering top talent supported by the latest technologies, offering ongoing training and career support to ensure success for both our clients and our talent.";

const StyledServicesContainer = styled(Box)`
  padding: 50px 30px;
`;

const StyledTitle = styled(Typography)`
  font-size: 26px;
  color: #222222;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    font-size: 22px;
    text-align: center;
  }
`;

const AboutUs = () => {
  const theme = useTheme();
  const isSmOrLess = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledServicesContainer id="about">
      <StyledTitle>About Us</StyledTitle>
      
      {/* First Card with Description and Image */}
      <Card
        sx={{
          display: "flex",
          flexDirection: isSmOrLess ? "column" : "row",
          alignItems: "center",
          gap: 2,
          margin: "20px auto",
          maxWidth: isSmOrLess ? "100%" : "80%",
          boxShadow: "none",
          border: "1px solid #e0e0e0",
          overflow: "visible", // Allow image overflow
        }}
      >
        <CardContent sx={{ flex: 1, padding: "20px" }}>
          <Typography variant="body1" color="text.primary">
            {DescriptionOne}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image="/assets/about-us-1.png"
          alt="Professional meeting"
          sx={{
            width: isSmOrLess ? "110%" : 220, // Increased width
            height: isSmOrLess ? 170 : 200, // Increased height
            objectFit: "cover",
            margin: isSmOrLess ? "-10px 0 0 0" : "-20px -10px -20px 0", // Negative margin for overlap
          }}
        />
      </Card>

      {/* Quoted Text */}
      <Typography
        fontStyle="italic"
        fontWeight="bold"
        textAlign="center"
        fontSize="18px"
        margin="90px 20px"
        color="text.secondary"
      >
        “Our team at Kovalty never disappoints a client; we follow guidelines throughout the completion of the project.” - Kovalty Team
      </Typography>

      {/* Second Card with Image and Description */}
      <Card
        sx={{
          display: "flex",
          flexDirection: isSmOrLess ? "column" : "row",
          alignItems: "center",
          gap: 2,
          margin: "20px auto",
          maxWidth: isSmOrLess ? "100%" : "80%",
          boxShadow: "none",
          border: "1px solid #e0e0e0",
          overflow: "visible", // Allow image overflow
        }}
      >
        <CardMedia
          component="img"
          image="/assets/about-us-2.png"
          alt="Collaborative teamwork"
          sx={{
            width: isSmOrLess ? "110%" : 250, // Increased width
            height: isSmOrLess ? 170 : 240, // Increased height
            objectFit: "cover",
            margin: isSmOrLess ? "-10px 0 0 0" : "-20px 0 -20px -10px", // Negative margin for overlap
          }}
        />
        <CardContent sx={{ flex: 1, padding: "20px" }}>
          <Typography variant="body1" color="text.primary">
            {DescriptionTwo}
          </Typography>
        </CardContent>
      </Card>
    </StyledServicesContainer>
  );
};

export default AboutUs;
