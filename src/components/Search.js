import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CountrySelect, CategorySelect } from './index';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: '300px',
      },
    },
  }));

export default function Search() {

const classes = useStyles();

  return (
    <section id="searchContainer">
        <form className={classes.root} noValidate autoComplete="off">
            <CountrySelect/>
            <CategorySelect/>
            <TextField
                id="outlined-secondary"
                label="Search Term"
                variant="filled"
                color="primary"
            />
            <Button id="go" color="primary">GO</Button>
        </form>
        <div id="hiddenContent">
            <div id="regionPopup"></div>
            <div id="categoryPopup"></div>
        </div>
    </section>
  );
};