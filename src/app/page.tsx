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
        <Card style={{ maxWidth: 250, padding: "20px", margin: "8px" }}>
          <CardContent>
            <Typography variant="h5">Produto X</Typography>
            <Typography>
              Product so great. Makes you even greater - go buy now. Super cheap
              deal!
            </Typography>
          </CardContent>
          <Button variant="contained" style={{ marginTop: "10px" }}>
            Reservar
          </Button>
        </Card>

        <Card style={{ maxWidth: 250, padding: "20px", margin: "8px" }}>
          <CardContent>
            <Typography>Produto X</Typography>
            <Typography>
              Product so great. Makes you even greater - go buy now. Super cheap
              deal!
            </Typography>
          </CardContent>
          <Button variant="contained" style={{ marginTop: "10px" }}>
            Reservar
          </Button>
        </Card>

        <Card style={{ maxWidth: 250, padding: "20px", margin: "8px" }}>
          <CardContent>
            <Typography>Produto X</Typography>
            <Typography>
              Product so great. Makes you even greater - go buy now. Super cheap
              deal!
            </Typography>
          </CardContent>
          <Button variant="contained" style={{ marginTop: "10px" }}>
            Reservar
          </Button>
        </Card>
        <BoxCard />
      </section>

      <footer style={{ background: "#222", color: "#fff", padding: "20px" }}>
        <Grid container justifyContent="space-around">
          <Grid item xs={12} sm={4}>
            <Button color="inherit">Sobre</Button>
            <Button color="inherit">Contato</Button>
            <Button color="inherit">Retire seu pedido</Button>
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
