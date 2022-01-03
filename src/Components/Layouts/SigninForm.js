import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import { Paper, Button, TextField, Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const SigninForm = () => {
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
            Sign In
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
              id="password"
              label="Password"
              variant="outlined"
              required
              fullWidth
            />
            <Box sx={{ mb: 4, mt: 4, display: "flex", flexDirection: "row" }}>
              <Typography variant="body2" sx={{ mr: 1, ml: 1 }}>
                <Checkbox defaultChecked size="small" /> Remember me
              </Typography>
              <Typography variant="body2" sx={{ mr: 1, ml: 1 }}>
                <Button variant="outlined" size="small">
                  Forgot Password
                </Button>
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mb: 4, ml: 6, mr: 6 }}>
            <Button variant="contained">Sign In</Button>
          </Box>
          <Typography variant="body1" sx={{ alignItems: "initial" }}>
            By clicking 'Sign In' you agree to our website Creators Club Terms &
            Conditions, adidas Privacy Notice and Terms & Conditions.
          </Typography>
        </Paper>
      </Box>
    </form>
  );
};

export default SigninForm;
