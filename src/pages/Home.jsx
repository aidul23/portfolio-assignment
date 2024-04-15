import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

function Home() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={{
        padding: 6,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${"https://fastly.picsum.photos/id/44/4272/2848.jpg?hmac=a0rRK2VqTNYMvxqfQjFI65m4ZzMGnKRJzHvrJovjoQQ"})`,
        backgroundSize: "cover",
        color: "#fff",
        height: 864,
        backgroundPosition: "center",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Welcome to my portfolio!
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ textAlign: "center", fontStyle: "italic" }}
      >
        &quot;Crafting Tomorrow&apos;s Designs Today: Unveiling the Art of
        Innovation&quot;
      </Typography>
      <Grid item>
        <Button variant="contained" sx={{ marginTop: 4 }}>
          Contact Me
        </Button>
      </Grid>
    </Grid>
  );
}

export default Home;
