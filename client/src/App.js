import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import MemoryIcon from './images/MemoryIcon2.png';

const App = () => {

  const [ currentId , setCurrentId ] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();


  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={MemoryIcon} alt="Memories" height="60" width="60" />
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId}  setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>

      {/* <Counter /> */}
    </Container>
  );
};

export default App;
