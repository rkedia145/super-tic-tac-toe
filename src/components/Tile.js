import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import black from "@material-ui/core/colors/black";


function useStyles(isEnabled, gridResult, isPrevClick) {
    var bgdColor = 'white';
    if (gridResult == 1){
        bgdColor = 'blue';
    } 
    else if (gridResult == 2){
        bgdColor = 'green';
    } else if (gridResult == 3){
        bgdColor = 'yellow';
    }
    else if (isEnabled){
        bgdColor = 'gray'
    }

    var border = `1px solid black`
    if (isPrevClick) {
        border = `1.5px solid red`
    }

    const classes = makeStyles((theme) => ({
        root: {
        flexGrow: 1,
        },
        paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        //   color: theme.palette.text.secondary,
        color: 'black',
        backgroundColor: bgdColor,
        border: border,
        fontSize: '1rem',
        height: '1rem',
        },
    }));
    return classes();
}

const Tile = (props) => {

    const isPrevClick = (prevCoord, smallGridIndex, rowIndex, colIndex) => {
        if (!prevCoord){
            return false
        }
        if (
            (prevCoord.prevSmallGrid == smallGridIndex) &&
            (prevCoord.prevRowIndex == rowIndex) && 
            (prevCoord.prevColIndex == colIndex)
        ) {
            return true
        } else {
            return false
        }
    }
    
    // extracting necessary fields from the props
    const {prevCoordinate, gameResult, gridResult, value, isEnabled, rowIndex, colIndex, smallGridIndex, handleOnClick} = props
    const classes = useStyles(isEnabled, gridResult, isPrevClick(prevCoordinate, smallGridIndex, rowIndex, colIndex));

    const childToParentOnClick = (event) => {
        if (isEnabled && (gridResult == 0) && (value == 0) && (gameResult == 0)) {
            handleOnClick(smallGridIndex, rowIndex, colIndex)
        }
    }

    return (
        <Grid item xs={4}>
          <Paper className={classes.paper} onClick={childToParentOnClick}>{value == 1 ? 'X' : value == 2 ? 'O' : ''}</Paper>
        </Grid>
    )
}

export default Tile;