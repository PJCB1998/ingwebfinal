import React from "react";
import { Card, CardActions,CardContent,CardMedia,Button,Typography } from "@mui/material";
import Delete from "@mui/icons-material/Delete"
import MoreHoriz from "@mui/icons-material/MoreHoriz"
import useStyles from "./styles"
import { useDispatch } from "react-redux";
import { deleteHorse } from "../../../actions/horses";
const Horse = ({ horse }) => {
const classes = useStyles()
const dispatch = useDispatch()
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={horse.fotoFile} title={horse.name}></CardMedia>
                <div className={classes.overlay}>
                    <Typography variant="h6">{horse.name}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button style={{color:'white'}} size="small" onClick={()=>dispatch(deleteHorse(horse._id))}>
                        <Delete fontSize="default"></Delete>
                    </Button>
                </div>
                <CardContent>
                <Typography className={classes.title} variant='h5' gutterBottom>{`Name: ${horse.name}`}</Typography>
                <Typography className={classes.title} variant='h5' gutterBottom>{`Sire: ${horse.sire}`}</Typography>
                <Typography className={classes.title} variant='h5' gutterBottom>{`Dam: ${horse.dam}`}</Typography>
                <Typography className={classes.title} variant='h5' gutterBottom>{`Reg: ${horse.reg}`}</Typography>
                <Typography className={classes.title} variant='h5' gutterBottom>{`Date of Birth: ${horse.dateOfBirth}`}</Typography>
                <Typography className={classes.title} variant='h5' gutterBottom>{`Repordutive State: ${horse.reproState}`}</Typography>
    
                </CardContent>
            
        </Card>
    );

}

export default Horse;