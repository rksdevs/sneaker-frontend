import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Paper, Button, TextField, Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const RegisterForm = () => {
  return (
    <form>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Paper variant="outlined" sx={{ my: 8, mx: 4 }}>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: "secondary.main", textAlign: "center" }}
            >
              <LockOutlinedIcon />
            </Avatar>
            Register
          </Typography>
          <Box sx={{ mb: 4, ml: 18, mr: 18, mt: 4 }}>
            <TextField
              id="emailAddress"
              label="Email Address"
              variant="outlined"
              required
              autoFocus
              fullWidth
            />
          </Box>
          <Box sx={{ mb: 4, ml: 18, mr: 18 }}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              required
              fullWidth
            />
          </Box>
          <Box sx={{ mb: 4, ml: 18, mr: 18 }}>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              required
              fullWidth
            />
          </Box>
          <Box sx={{ mb: 4, ml: 18, mr: 18 }}>
            <TextField
              id="phoneNumber"
              label="Phone Number"
              variant="outlined"
              fullWidth
            />
          </Box>

          <Box sx={{ mb: 4 }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="I agree to the terms & conditions"
            />
          </Box>

          <Box sx={{ mb: 4, ml: 6, mr: 6 }}>
            <Button variant="contained">Register</Button>
          </Box>
        </Paper>
      </Box>
    </form>
  );
};

export default RegisterForm;
