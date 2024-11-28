import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const servicesContent =[
  {
    img        : '/assets/OurServicesCard2.png',
    title      : 'Managed Services',
    description: 'Our consultants have in-depth knowledge and experience in the design, deployment and integration of management solutions for infrastructure.',
  },
  {
    img        : '/assets/Development.png',
    title      : 'Development',
    description: 'We offer an integrated professional team capable of identifying and engineering workflow to generate deliverables of quality, creation of custom software, end-to-end products, modules and components.',
  },
  {
    img        : '/assets/OurServicesCard3.png',
    title      : 'Quality Assurance',
    description: 'A primary purpose of testing is to identify software vulnerabilities in order to discover and repair any defects. Qrious provides the Manual Testing, Automated Testing and Performance Testing services.',
  },
  {
    img        : '/assets/itRecrutingBanner.jpg',
    title      : 'IT Recruiting',
    description: 'We have long-term and short-term IT consulting needs. In addition to staffing, Qrious offers recruitment solutions to customers who need more than just providing opening candidates.',
  },
  {
    img        : '/assets/OurServicesCard4.png',
    title      : 'Training',
    description: 'As per the needs of the company, we provide training on the latest IT technologies and regions, and deploy trained professionals from new college grades to senior consultants.',
  }
];

const StyledServicesContainer = styled(Box)`
  padding: 100px 30px 0px 30px;
  @media (max-width: 900px) {
    padding: 50px 30px 0px 30px;
  }
`;

const StyledTitle = styled(Typography)`
  font-size: 26px;
  color    : #222222;
  @media (max-width: 900px) {
    font-size : 22px;
    text-align: center;
  }
`;

const StyledContainer = styled(Box)`
  width           : 100%;
  margin-top      : 10px;
  border-radius   : 0px 30px 0px 30px;
  background-color: #e9d3eb;
  border          : 1px solid #00000033;
  padding         : 15px 20px;
  display         : flex;
  flex-direction  : row;
  align-items     : center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled(Box)`
  min-width    : 320px;
  border-radius: 10px 0px 0px 0px;
`;

const ActionAreaCard = ({
  img,
  title,
  description,
}: {
  img        : string;
  title      : string;
  description: string;
}) => {
  return (
    <Card
      sx={{
        minWidth     : 250,
        maxWidth     : 300,
        minHeight    : '420px',
        flexShrink   : 0,
        display      : "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia component = "img" height = "200" image = {img} alt = {title} />
      <CardContent>
        <Typography variant = "h6">{title}</Typography>
        <Typography variant = "body1">{description}</Typography>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const theme      = useTheme();
  const isMdOrLess = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <StyledServicesContainer id         = "services">
    <StyledTitle             fontWeight = {500}>Our Services</StyledTitle>
      <Box
        sx={{
          display      : "flex",
          flexDirection: isMdOrLess ? "column" : "row",
          overflowX    : isMdOrLess ? "visible": "auto",
          alignItems   : 'center',
          gap          : 2,
          padding      : 2,
        }}
      >
        {servicesContent.map((card, index) => (
          <ActionAreaCard
            key         = {index}
            img         = {card.img}
            title       = {card.title}
            description = {card.description}
          />
        ))}
      </Box>
      <StyledTitle fontWeight = {500} fontSize = {22}>
        Build your project with us
      </StyledTitle>
      <StyledContainer>
        <ImageContainer>
          <Box
            component = "img"
            src       = "/assets/ContactUsImage.png"
            alt       = "Kovalty Technologies"
            style     = {{ height: "100%", width: "100%" }}
          />
        </ImageContainer>
        <Box>
          <Typography
            fontWeight = {500}
            textAlign  = "center"
            paddingX   = {5}
            color      = "#00000090"
          >
            We invite you to embark on this exciting journey with us. Whether you're a startup seeking to launch your first product or an established business looking to enhance your software capabilities, we're here to help you succeed.
          </Typography>
          <Box width = "100%" display = "flex" justifyContent = "center" mt = {1}>
            <Button
              variant = "contained"
              sx      = {{ alignSelf: "center" }}
              onClick = {() => {
                window.location.hash = "";
                window.location.hash = "fotter";
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </StyledContainer>
    </StyledServicesContainer>
  );
};

export default Services;
