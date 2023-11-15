import React from "react";
import {
  Typography,
  Toolbar,
  AppBar,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import BoxCard from "@/components/card";
import BoxFooter from "@/components/footer";

export default function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">LinX Commerce</Typography>
        </Toolbar>
      </AppBar>

      <div
        style={{ display: "flex", justifyContent: "center", padding: "12px" }}
      >
        <Typography variant="h4">Produtos</Typography>
      </div>

      <section
        style={{ padding: "20px", display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BoxCard
            imgSrc="funko2.png"
            title="Funko - Fred"
            description="lindo e bonito"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BoxCard
            imgSrc="funko1.png"
            title="Funko - Djonga"
            description="O melhor cantor do rap naciona"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BoxCard
            imgSrc="animewoman.jpg"
            title="Personagem Otaku"
            description="Sexy e com acabamento impecável"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BoxCard
            imgSrc="dragonballpersonagem.jpg"
            title="Personagem Goku"
            description="O mais forte e com melhor acabamento"
          />
        </Grid>
      </section>

      <BoxFooter />
    </>
  );
}
