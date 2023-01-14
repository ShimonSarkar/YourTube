import { Stack, Typography } from "@mui/material"; // Stack of items (row or column)
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

// sx allows for inline styling
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#111525",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <Typography
        sx={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "24pt",
          color: "white",
          paddingRight: "4px",
        }}
      >
        Your
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "24pt",
          color: "white",
          backgroundColor: "#5EA2D7",
          paddingRight: "4px",
          paddingLeft: "4px",
          paddingTop: "0px",
          paddingBottom: "0px",
          borderRadius: "0.75rem",
        }}
      >
        Tube
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
