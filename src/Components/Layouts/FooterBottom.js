import { Typography, Paper, Link } from "@mui/material";

const FooterBottom = () => {
  return (
    <div>
      <Paper>
        <Typography variant="h6" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://mui.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Paper>
    </div>
  );
};

export default FooterBottom;
