import React from "react";
import { Typography, Toolbar, AppBar, Grid, Container } from "@mui/material";
import BoxCard from "@/components/card";
import BoxFooter from "@/components/footer";
import Header from "@/components/headerTop";

export default function Home() {
  const products = [
    {
      imgSrc: "funko1.png",
      title: "Funko - Djonga",
      description: "O melhor cantor do rap naciona",
    },
    {
      imgSrc: "funko2.png",
      title: "Funko - Fred",
      description: "lindo e bonito",
    },
    {
      imgSrc: "funko3.jpeg",
      title: "Funko pop TV",
      description: "Louco e com acabamento impecável",
    },
    {
      imgSrc: "funko4.jpeg",
      title: "Funko Madeirão",
      description: "O mais forte e duro como madeira",
    },
    {
      imgSrc: "funko5.jpeg",
      title: "Squirdlee",
      description: "O mais molhado dos pokemons e mais casca grossa",
    },
    {
      imgSrc: "funko6.jpeg",
      title: "Funko Personagem Vegeta",
      description: "O mais Brabo do Dragon Ball",
    },
    {
      imgSrc: "funko7.jpeg",
      title: "Funko Personagem Vegeta",
      description: "O mais Brabo do Dragon Ball",
    },
    {
      imgSrc: "funko8.jpg",
      title: "Funko Personagem Vegeta",
      description: "O mais Brabo do Dragon Ball",
    },
    {
      imgSrc: "dragonballpersonagem.jpg",
      title: "Funko - Goku",
      description: "O mais forte e com melhor acabamento",
    },
  ];

  return (
    <>
      <Header />

      <div
        style={{ display: "flex", justifyContent: "center", padding: "12px" }}
      >
        <Typography variant="h4">Produtos</Typography>
      </div>

      <Container style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <BoxCard
              imgSrc={product.imgSrc}
              title={product.title}
              description={product.description}
            />
          </Grid>
        ))}
      </Container>

      <BoxFooter />
    </>
  );
}
