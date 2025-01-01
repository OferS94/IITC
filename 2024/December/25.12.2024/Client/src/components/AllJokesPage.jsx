// import { useState, useEffect } from 'react'
// import axios from 'axios'

// function AllJokesPage() {
//     const [jokes, setJokes] = useState([])

//   async function getAllJokes () {
//     const res = await axios.get('http://localhost:3000/api/v1/jokes')
//     console.log(res.data)
    
//     setJokes(res.data)
//     console.log("Component updated");
//   }


//   useEffect(() => {
//     getAllJokes()
//     console.log("Component mounted");
//   }, [])
  
//   return (
//     <>
//       {jokes?.map((joke) => (
//         <div key={joke._id}>
//           <h6>{joke.setup}</h6>
//           <p>{joke.punchline}</p>
//         </div>
//       ))}
//     </>
//   )
// }

// export default AllJokesPage
import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Masonry from "@mui/lab/Masonry";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}));

function AllJokesPage() {
  const [jokes, setJokes] = useState([]);

  async function getAllJokes() {
    const res = await axios.get("http://localhost:3000/api/v1/jokes");
    setJokes(res.data);
  }

  useEffect(() => {
    getAllJokes();
  }, []);

  return (
    <Box sx={{ width: "100%", minHeight: 500, p: 2 }}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        {jokes.map((joke) => (
          <Paper key={joke._id} elevation={3}>
            <StyledAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6" component="span">
                  {joke.setup}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{joke.punchline}</Typography>
              </AccordionDetails>
            </StyledAccordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
}

export default AllJokesPage;
