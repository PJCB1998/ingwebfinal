import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useStyles } from "./styles"
import { createHorse } from "../../actions/horses";
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'

const Form = () => {
    const { classes } = useStyles()
    const [horseData, setHorseData] = useState({
        name: '',
        dam: '',
        sire: '',
        dateOfBirth: '',
        fotoFile: '',
        reg: '',
        reproState: ''

    })
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createHorse(horseData))
    }

    const clear = () => {
        setHorseData({
            name: '',
            dam: '',
            sire: '',
            dateOfBirth: '',
            fotoFile: '',
            reg: '',
            reproState: ''
        })
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Enter a Horse</Typography>
                <TextField name="name" variant="outlined" label="Name" fullWidth value={horseData.name} onChange={(e) => setHorseData({ ...horseData, name: e.target.value })}></TextField>
                <TextField name="dam" variant="outlined" label="Dam" fullWidth value={horseData.dam} onChange={(e) => setHorseData({ ...horseData, dam: e.target.value })}></TextField>
                <TextField name="sire" variant="outlined" label="Sire" fullWidth value={horseData.sire} onChange={(e) => setHorseData({ ...horseData, sire: e.target.value })}></TextField>
                <TextField name="reg" variant="outlined" label="Reg" fullWidth value={horseData.reg} onChange={(e) => setHorseData({ ...horseData, reg: e.target.value })}></TextField>
                <TextField name="dateOfBirth" variant="outlined" label="DateOfBirth" fullWidth value={horseData.dateOfBirth} onChange={(e) => setHorseData({ ...horseData, dateOfBirth: e.target.value })}></TextField>
                <TextField name="reproState" variant="outlined" label="ReproState" fullWidth value={horseData.reproState} onChange={(e) => setHorseData({ ...horseData, reproState: e.target.value })}></TextField>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setHorseData({ ...horseData, fotoFile: base64 })} ></FileBase>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>

        </Paper>
    );

}

export default Form;