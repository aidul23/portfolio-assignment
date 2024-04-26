import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <Container sx={{ paddingTop: 6 }}>
      <Paper sx={{ padding: "20px", marginTop: "2px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <img
              src="https://aidul23.github.io/aidulislam/assets/img/perfil.png"
              alt="profile-pic"
              style={{ borderRadius: "50%" }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" paragraph>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              Myself Md. Aidul Islam. I was born and raised in Chittagong.
              I`&apos;`ve pursued my Bachelor of Science (Engg.) degree in CSE
              from IIUC. Problem solving with many kinds of algorithms is an
              interesting topic for me. I like work with team too. I have many
              projects which was I, developed working with team members. I make
              android and web applications. Looking forward to working in such
              an environment that would allow me to use my conceptual,
              technical, analytical skills and abilities which offer
              professional growth while being resourceful, innovative, and
              dynamic.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
