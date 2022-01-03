import Navbar from "../Components/Layouts/Navbar.js";
import SigninForm from "../Components/Layouts/SigninForm.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import FeatureList from "../Components/Layouts/FeatureList.js";

const Signin = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <SigninForm />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <FeatureList />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Signin;
