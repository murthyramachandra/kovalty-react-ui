import { Box, Grid, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { navItems } from "../../../components/Layout/AppBar";
import { ApartmentRounded, Call, Mail } from "@mui/icons-material";
import ContactUs from "./ContactUs";

// background-color: #1e1666;
// rgba(116, 105, 182, 0.541176) 80%
// rgba(110, 99, 212, 0.9) 80%
const StyledFotterContainer = styled(Box)`
  padding: 100px 30px;
  @media (max-width: 900px) {
    padding: 50px 30px;
  }
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.901961) 25%,
    rgba(110, 99, 212, 0.9) 80%
  );
  color: #fff;
`;

const iconStyles = {
  color: "#fff",
  // backgroundColor: "#2513d1",
  backgroundColor:"rgb(122, 108, 203)",
  width: "45px",
  height: "45px",
  padding: "10px",
  borderRadius: "5px",
};

const Fotter = () => {
  return (
    <StyledFotterContainer id="fotter">
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        marginBottom={4}
        color="black"
        paddingBottom={"30px"}
      >
        Kovalty Technologies
      </Typography>
      <Grid container spacing={4} justifyContent="space-between">
        {/* Address */}
        <Grid item xs={12} md={4}>
          <Stack direction="column" alignItems="center" spacing={1}>
            <div>
              <ApartmentRounded style={iconStyles} />
            </div>
            <Typography fontSize={20} fontWeight={500}>
              Company Address
            </Typography>
            <Typography fontSize={14} fontWeight={400} textAlign={"center"}>
              First Floor, New Awfis Space Building,
              <br />
              Kothaguda Junction, Hyderabad - 500 084,
              <br />
              Telangana, India.
            </Typography>
          </Stack>
        </Grid>

        {/* Telephone */}
        <Grid item xs={12} md={4}>
          <a href="tel:+914523132341" style={{ textDecoration: "none" }}>
            <Stack direction="column" alignItems="center" spacing={1}>
              <div style={{ textAlign: "center" }}>
                <Call style={iconStyles} />
              </div>
              <Typography fontSize={20} fontWeight={500} color="#fff">
                Telephone Number
              </Typography>
              <Typography fontSize={14} fontWeight={400} color="#fff">
                +91 45 2313 2341 / 42 / 43
              </Typography>
            </Stack>
          </a>
        </Grid>

        {/* Email */}
        <Grid item xs={12} md={4}>
          <a href="mailto:info@kovalty.com" style={{ textDecoration: "none" }}>
            <Stack direction="column" alignItems="center" spacing={1}>
              <div style={{ textAlign: "center" }}>
                <Mail style={iconStyles} />
              </div>
              <Typography fontSize={20} fontWeight={500} color="#fff">
                Email
              </Typography>
              <Typography fontSize={14} fontWeight={400} color="#fff">
                info@kovalty.com
              </Typography>
            </Stack>
          </a>
        </Grid>
      </Grid>
      <Grid>
        <Typography
          paddingTop={"40px"}
          fontWeight={200}
          textAlign="center"
          marginBottom={4}
          color="#fff"
          paddingBottom={"30px"}
        >
          Copyright ©️ Kovalty Technologies all rights reserved.
        </Typography>
      </Grid>
      <Grid>
      </Grid>
    </StyledFotterContainer>
  );
};

export default Fotter;

/* <Typography
            color="#08126B"
            fontSize={18}
            fontWeight={400}
            paddingLeft={5}
          >
            Contact
          </Typography> */

/* <Typography
            color="#08126B"
            fontSize={18}
            fontWeight={400}
            paddingLeft={5}
          >
            Contact
          </Typography> */