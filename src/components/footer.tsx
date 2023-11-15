import React from "react";
import { Grid, Icon, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export default function BoxFooter() {
  return (
    <footer style={{ background: "#222", color: "#FFF", padding: "20px" }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={2}>
          <IconButton>
            <Facebook />
          </IconButton>

          <IconButton>
            <Twitter />
          </IconButton>

          <IconButton>
            <Instagram />
          </IconButton>
        </Grid>
      </Grid>
    </footer>
  );
}
