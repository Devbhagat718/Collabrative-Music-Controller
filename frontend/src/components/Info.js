import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";

//This code create and enumerrate like function which can be accessed by setPage
//defined in function Info component
const pages = {
  JOIN: "pages.join",
  CREATE: "pages.create",
};

//This creates a Info component but here instead of class component we have used 
//Function type component
export default function Info(props) {
//here in const page is variable while serPage is calling method
  const [page, setPage] = useState(pages.JOIN);

  function joinInfo() {
    return "Join page";
  }

  function createInfo() {
    return "Create page";
  }
//UseEffect hook will allow you to perform side effects in function
  useEffect(() => {
    console.log("ran");
    return () => console.log("cleanup");
  });

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} align="center">
        <Typography component="h4" variant="h4">
          What is House Party?
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="body1">
            {/*cheks if the current state is pages.join or create*/}
            {page === pages.JOIN ? joinInfo() : createInfo()}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <IconButton
          onClick={() => {
            page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE);
          }}
        >
          {page === pages.CREATE ? 
            (<NavigateBeforeIcon />) : (<NavigateNextIcon />)
          }
        </IconButton>
      </Grid>
      <Grid item xs={12} align="center">
        <Button color="secondary" variant="contained" to="/" component={Link}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
}