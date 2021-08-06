import React, {useState, useEffect}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Tile from './Tile';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

const SmallGrid = (props) => {
  const classes = useStyles();

  // extracting necessary fields from the props
  const {prevCoordinate, gameResult, isEnabled, smallGridIndex, smallGrid, handleOnClick} = props
  var tiles = [];
  var counter = 0;
  const gridResult = smallGrid.gridResult
  for (var row = 0; row < 3; row++){
    for (var col = 0; col < 3; col++){
      const value = smallGrid.grid[row][col]
      tiles.push(
        <Tile prevCoordinate={prevCoordinate} gameResult={gameResult} gridResult={gridResult} value={value} isEnabled={isEnabled} rowIndex={row} colIndex={col} smallGridIndex={smallGridIndex} key={counter} handleOnClick={handleOnClick}/>
      );
      counter += 1;
    }
  }

  return (
      <Grid item xs={4} container>
        {tiles}
      </Grid>
  );
}

export default SmallGrid