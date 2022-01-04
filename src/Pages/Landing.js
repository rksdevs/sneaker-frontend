import { Container, Box, Paper, Grid } from "@mui/material";
import Navbar from "../Components/Layouts/Navbar";
import FooterBottom from "../Components/Layouts/FooterBottom";
import FooterTop from "../Components/Layouts/FooterTop";
import ImageListItem from "@mui/material/ImageListItem";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} alignItems="stretch">
          <ImageListItem>
            <img
              src={`https://images.pexels.com/photos/4775192/pexels-photo-4775192.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
              alt="asdada"
              loading="lazy"
            />
          </ImageListItem>
        </Grid>
      </Grid>
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Landing;
