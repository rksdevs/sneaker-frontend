import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

const FooterGroup = ({ footerProps }) => {
  return (
    <div>
      <Box>
        <List>
          <Typography variant="h5" color="#fafafa">
            {footerProps.heading}
          </Typography>
          {footerProps.list.map((item) => (
            <ListItem>
              <Link href="#" underline="hover" color="#fafafa">
                {item}
              </Link>
            </ListItem>
          ))}
          {/* <ListItem>
            <Link href="#" underline="hover" color="#fafafa">
              {"Item1"}
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" underline="hover" color="#fafafa">
              {"Item1"}
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" underline="hover" color="#fafafa">
              {"Item1"}
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" underline="hover" color="#fafafa">
              {"Item1"}
            </Link>
          </ListItem> */}
        </List>
      </Box>
    </div>
  );
};

export default FooterGroup;
