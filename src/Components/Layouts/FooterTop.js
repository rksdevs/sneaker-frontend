import FooterGroup from "./FooterGroup";
import { Box } from "@mui/system";

const FooterTop = () => {
  const forBrands = {
    list: ["brand1", "brand2", "brand3", "brand4"],
    heading: "Brands",
  };
  const forSeries = {
    list: ["series1", "series2", "series3", "series4"],
    heading: "Series",
  };
  const forSupport = {
    list: ["Email", "Call us", "Chat", "Address"],
    heading: "Support",
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          mt: 2,
          background: "black",
        }}
      >
        <Box>
          <FooterGroup footerProps={forBrands} />
        </Box>
        <Box>
          <FooterGroup footerProps={forSeries} />
        </Box>
        <Box>
          <FooterGroup footerProps={forSupport} />
        </Box>
      </Box>
    </div>
  );
};

export default FooterTop;
