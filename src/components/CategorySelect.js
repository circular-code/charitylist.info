/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';

export default function ComboBox() {

  return (
    <Autocomplete
      multiple
      id="combo-box-demo"
      options={categories}
      getOptionLabel={(option) => option.title}
      style={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="Category" variant="filled" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const categories = [
  { title: "animals"},
  { title: "alcohol"},
  { title: "drugs"},
  { title: "culture"},
  { title: "community"},
  { title: "disabled"},
  { title: "family"},
  { title: "youth"},
  { title: "kids"},
  { title: "sport"},
  { title: "violence"},
  { title: "education"},
  { title: "environment"},
  { title: "health"},
  { title: "old"},
  { title: "unemployment"},
  { title: "rights"},
  { title: "religion"},
  { title: "research"}
];
