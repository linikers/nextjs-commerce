import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface iCard {
  imgSrc: string;
  title: string;
  description: string;
}
export default function BoxCard({ imgSrc, title, description }: iCard) {
  const imageUrl = `${process.env.PUBLIC_URL || ""}/${
    imgSrc || "defautImage.png"
  }`;

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: 300,
        margin: "8px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="fred"
          style={{ objectFit: "contain", margin: "8px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "red", color: "white" }}
        >
          Reservar
        </Button>
        <IconButton aria-aria-label="Fav">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
