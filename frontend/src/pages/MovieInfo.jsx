import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import "./MovieInfo.css";

function MovieInfo({ title, description, releaseDate, rating, imageUrl }) {
  return (
    <Box className="MovieInfo" sx={{ py: 5, backgroundColor: "#121212", color: "#fff" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <img
              src={imageUrl}
              alt={`${title} poster`}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={12} lg={7}>
            <Typography variant="h2" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {description}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Release Date: {releaseDate}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 3 }}>
              Rating: {rating}/10
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Add Review
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default MovieInfo;
