import { useState, useEffect } from "react";
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

export default function RandomJokePage() {
  const theme = useTheme();
  const [joke, setJoke] = useState({});
  const [image, setImage] = useState("");

  async function fetchJoke() {
    try {
      const jokeRes = await axios.get("http://localhost:3000/api/v1/jokes/random");
      const imgRes = await axios.get("https://picsum.photos/400/300", { responseType: "blob" });

      setJoke(jokeRes.data);
      setImage(URL.createObjectURL(imgRes.data));
    } catch (err) {
      console.error("Error fetching joke or image:", err);
    }
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Card
      sx={{
        width: 400,
        boxShadow: 10,
        borderRadius: 3,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={image || "/static/images/cards/default.jpg"}
          alt="Random Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Random Joke
          </Typography>
          <Typography variant="body2">
            <p>{joke?.setup}</p>
            <p>{joke?.punchline}</p>
            <Button onClick={fetchJoke} style={{ marginTop: "16px" }}>
              Get Random Joke
            </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
