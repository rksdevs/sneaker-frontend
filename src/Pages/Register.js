import Navbar from "../Components/Layouts/Navbar.js";
import RegisterForm from "../Components/Layouts/RegisterForm.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import FeatureList from "../Components/Layouts/FeatureList.js";

const Register = () => {
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
              <RegisterForm />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <FeatureList noButton />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Register;
