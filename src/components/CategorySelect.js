/* eslint-disable no-use-before-define */
import React from 'react';
import { Select, MenuItem, InputLabel, FormControl, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth:240,
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
    selectEmpty: {
        rginTop: theme.spacing(2),
    },
}));

export default function CategorySelect() {
    const classes = useStyles();
  
    return (
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"animals"}>animals</MenuItem>
          <MenuItem value={"alcohol"}>alcohol</MenuItem>
          <MenuItem value={"drugs"}>drugs</MenuItem>
          <MenuItem value={"culture"}>culture</MenuItem>
          <MenuItem value={"community"}>community</MenuItem>
          <MenuItem value={"disabled"}>disabled</MenuItem>
          <MenuItem value={"family"}>family</MenuItem>
          <MenuItem value={"youth"}>youth</MenuItem>
          <MenuItem value={"kids"}>kids</MenuItem>
          <MenuItem value={"sport"}>sport</MenuItem>
          <MenuItem value={"violence"}>violence</MenuItem>
          <MenuItem value={"education"}>education</MenuItem>
          <MenuItem value={"environment"}>environment</MenuItem>
          <MenuItem value={"health"}>health</MenuItem>
          <MenuItem value={"old"}>old</MenuItem>
          <MenuItem value={"unemployment"}>unemployment</MenuItem>
          <MenuItem value={"rights"}>rights</MenuItem>
          <MenuItem value={"religion"}>religion</MenuItem>
          <MenuItem value={"research"}>research</MenuItem>
        </Select>
      </FormControl>
    );
}