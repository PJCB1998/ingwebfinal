import React, {useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';  
import logo from './images/Logo_Blanco.png';

import {useDispatch} from 'react-redux';
import {getHorses} from './actions/horses'
import Form from "./components/Form/Form";
import Horses from "./components/Horses/Horses";
import useStyles from "./styles";
import './index.css'


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getHorses());
    },[dispatch]);
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Criadero Saint Michell</Typography>
                <img className={classes.image} src = {logo} alt="Logo" height="60"></img>
            </AppBar>
            <Grow in >
                <Container>
                    <Grid container jusify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Horses></Horses>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form></Form>
                        </Grid>
                    </Grid>
                    
                </Container>
            </Grow>

        </Container>
    );
}

export default App;