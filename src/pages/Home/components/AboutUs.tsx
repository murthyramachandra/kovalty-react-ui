import { Box, Card, CardContent, CardMedia, styled, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const DescriptionOne =
  "At Kovalty Technologies, we are passionate about transforming ideas into innovative software solutions. Our mission is to empower businesses through top-tier IT services and cutting-edge software development tailored to meet the unique needs of our clients. <br/> <br/> We are a young, dynamic team of software engineers, designers, product owners, and product managers committed to delivering exceptional tech solutions. Our diverse industry backgrounds allow us to blend creativity with technical know-how, helping businesses thrive in the digital world. Our collaborative culture fosters innovation, keeping us at the forefront of technological advancements. We're driven by a passion for using innovative tech to create meaningful impact and drive success for our clients.";

const DescriptionTwo =
  "We believe successful projects begin with understanding our clients' needs. We listen attentively and collaborate closely, ensuring our strategies align with your goals. Our agile development approach allows us to adapt to changing requirements while maintaining transparency and open communication throughout the project's lifecycle. <br/> <br/> We invite you to embark on this exciting journey with us. Whether you're a startup seeking to launch your first product or an established business looking to enhance your software capabilities, we're here to help you succeed."
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
          {DescriptionOne.split("<br/>").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
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
        {/* “Our team at Kovalty never disappoints a client; we follow guidelines throughout the completion of the project.” - Kovalty Team */}
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
          {DescriptionTwo.split("<br/>").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </Typography>
        </CardContent>
      </Card>
    </StyledServicesContainer>
  );
};

export default AboutUs;
