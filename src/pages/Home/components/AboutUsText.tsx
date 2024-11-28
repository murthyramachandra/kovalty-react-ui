import React from 'react';
import { Box, Typography, Grid, styled } from '@mui/material';

const ContainerHolder = styled(Box)({
  background: '',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '5%',
  height: 'auto',
});

const TextContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  marginBottom: '3rem',
  h1: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '1rem',
  },
});

const GridContainer = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gap: '4rem',
  gridTemplateColumns: 'repeat(3, 1fr)',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '3rem',
    padding: '0 8%',
  },
}));

const GridDiv = styled(Box)(({ theme }) => ({
  height: '25vh',
  width: '25vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: '#e3f2fd',
  borderRadius: '10px',
  border: '1px solid black',
  transition: 'transform 0.5s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('lg')]: {
    width: '300px',
    height: '150px',
  },
  [theme.breakpoints.down('md')]: {
    width: '35vw',
  },
  [theme.breakpoints.down('xs')]: {
    width: '75vw',
    height: '80px',
  },
}));

const GridImg = styled(Box)({
  width: '55px',
  height: '55px',
  backgroundColor: 'white',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  img: {
    width: '35px',
    height: '35px',
    animation: 'none',
  },
  '@keyframes animateGif': {
    from: { transform: 'rotateY(0deg)' },
    to: { transform: 'rotateY(360deg)' },
  },
  '&:hover img': {
    animation: 'animateGif 1s linear',
  },
});

const GridText = styled(Box)(({ theme }) => ({
  width: '18vw',
  h3: {
    fontSize: '1.3rem',
    fontWeight: 700,
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '0.9rem',
    },
  },
  p: {
    fontSize: '0.8rem',
    fontWeight: 400,
    [theme.breakpoints.down('lg')]: {
      fontSize: '0.7rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '0.6rem',
    },
  },
  [theme.breakpoints.down('sm')]: {
    width: '22vw',
  },
  [theme.breakpoints.down('xs')]: {
    width: '55vw',
  },
}));

const WhyWebSoc: React.FC = () => {
  return (
    <ContainerHolder>
      <TextContainer>
        <Typography variant="h1">Why Kovalty..?</Typography>
      </TextContainer>

      <GridContainer container spacing={4}>
        {[
          { imgSrc: '/images/career.gif', title: 'Career Path', description: 'Explore diverse career opportunities in tech and marketing after completing the program.' },
          { imgSrc: '/images/development.gif', title: 'Portfolio Development', description: 'Learn how the program supports the creation of an impressive professional portfolio.' },
          { imgSrc: '/images/guide.gif', title: 'Guidance', description: 'Access personalized advice and industry insights from experienced mentors.' },
          { imgSrc: '/images/curriculum.gif', title: 'Curriculum Highlights', description: 'Get an overview of the comprehensive curriculum, including specific technologies and methodologies.' },
          { imgSrc: '/images/cert.gif', title: 'Certification', description: 'Obtain a valuable certification upon program completion, recognized within the industry.' },
          { imgSrc: '/images/job.gif', title: 'Job Portal Access', description: 'Benefit from access to a specialized job portal for program graduates, facilitating connections with potential employers.' },
        ].map((item, index) => (
          <GridDiv key={index}>
            <GridImg>
              <img src={item.imgSrc} alt={item.title} />
            </GridImg>
            <GridText>
              <Typography variant="h3">{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </GridText>
          </GridDiv>
        ))}
      </GridContainer>
    </ContainerHolder>
  );
};

export default WhyWebSoc;
