import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const projects = [
  {
    id: 1,
    title: "UNI HACKS - Smartphone Based University Utility App",
    description:
      "The project is entitled as UNI HACKS. This eas the final project of my bachelor in CSE. Me and my teammate try to solve those problems, which an university student face on the campus.",
    imgSrc: "https://aidul23.github.io/aidulislam/assets/img/portfolio1.jpg",
  },
  {
    id: 2,
    title: "eDU - Interactive e-Learning Application",
    description:
      "This is an interactive e-learning app for childern. Me and one of my friend made this application for an organaization called Ofk-Opportunity for Kids.",
    imgSrc: "https://aidul23.github.io/aidulislam/assets/img/portfolio3.jpg",
  },
  {
    id: 3,
    title: "Flyerz - Multi Vendor eCommerce App",
    description:
      "This is a multi vendor eCommerce application. I work on this project while I was doing my intership. I work on the delivery section of this application where I implement Google Map services and other api and third party libraries.",
    imgSrc: "https://aidul23.github.io/aidulislam/assets/img/portfolio2.jpg",
  },
];

export default function Portfolio() {
  return (
    <Container sx={{ padding: 4 }}>
      <Paper sx={{ padding: 2 }}>
        <Typography
          sx={{ paddingTop: 2, paddingBottom: 2 }}
          variant="h4"
          align="center"
          gutterBottom
        >
          Portfolio
        </Typography>
        <Grid container spacing={2} sx={{ justifyContent: "center"}}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="194"
                    image={project.imgSrc}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom component="div">
                      {" "}
                      {project?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {" "}
                      {project?.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
