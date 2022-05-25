import React from "react";
import Horse from "./Horse/Horse";
import {useStyles} from "./styles"
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const Horses = () => {
    const {classes} = useStyles()
    const horses = useSelector((state)=>state.horses)

    console.log(horses)
    return(
        
      !horses.length ? <CircularProgress></CircularProgress>: (
          <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
              {
                  horses.map((horse)=>(
                      <Grid item key={horse.id} xs={12} sm={6}>
                        <Horse horse={horse}></Horse>
                      </Grid>
                  ))

              }
          </Grid>
      )
        
    );

}

export default Horses;