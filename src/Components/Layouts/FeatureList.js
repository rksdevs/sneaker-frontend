import { Box } from "@mui/system";
import { Paper, Button, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CheckIcon from "@mui/icons-material/Check";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import StarIcon from "@mui/icons-material/Star";
import { pink } from "@mui/material/colors";

const FeatureList = (props) => {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Paper variant="outlined" sx={{ my: 8, mx: 4 }}>
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            JOIN THE CLUB GET REWARDED
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="body1"
              sx={{ mt: 4, mb: 1, ml: 2, mb: 0, display: "flex" }}
            >
              Join the Sneaker-Freaker Club & Get Rewarded:
            </Typography>
            <Box sx={{ ml: 1 }}>
              <List>
                <ListItem>
                  <CheckIcon sx={{ mr: 2 }} />
                  Earn access to shop limited edition products
                </ListItem>
                <ListItem>
                  <CheckIcon sx={{ mr: 2 }} />
                  Level up for exclusive access to new arrivals
                </ListItem>
                <ListItem>
                  <CheckIcon sx={{ mr: 2 }} />
                  Receive our best special offers and promotions
                </ListItem>
              </List>
            </Box>
            <Typography
              variant="body1"
              sx={{
                mt: 0,
                mb: 1,
                ml: 2,
                mb: 2,
                display: "flex",
                textAlign: "initial",
              }}
            >
              Join now and start earning points to access new levels and
              rewards. It's time to unlock the best of adidas.
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 1,
              mb: 4,
              ml: 2,
              mr: 6,
              textAlign: "initial",
              display: props.noButton ? "none" : "inherit",
            }}
          >
            <Button variant="contained" size="large">
              Register Now
            </Button>
          </Box>
          <Box>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="https://images.pexels.com/photos/2647973/pexels-photo-2647973.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="green iguana"
              />
              <CardContent>
                <Box
                  sx={{ display: "flex", justifyContent: "center", mb: 0.5 }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ mb: 0, mr: 1 }}
                  >
                    Members
                  </Typography>
                  <StarIcon sx={{ color: pink[500], height: "inherit" }} />
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Join now and start earning points to access new levels and
                  rewards. It's time to unlock the best of adidas.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default FeatureList;
