import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function BoxCard() {
  return (
    <Card sx={{ maxWidth: 290 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${process.env.PUBLIC_URL || ""}/funko2.png`}
          alt="fred"
          style={{ objectFit: "contain", margin: "8px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Funko - Fred Mercury
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="large" color="primary">
          Reservar
        </Button>
      </CardActions>
    </Card>
  );
}
