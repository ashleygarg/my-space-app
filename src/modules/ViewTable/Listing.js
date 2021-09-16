
import { useQuery } from "@apollo/client";
import { launchesPast } from '../../queries/query';
import DataTable from "../../components/Table";
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import SimpleDialog from "../../components/dialog";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto'
  }
});

function Main() {
  const classes = useStyles();
  const [limit, setLimit] = useState(50);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { loading, error, data } = useQuery(launchesPast, {
    variables: { limit: limit },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Button className={classes.button} variant="contained" color="primary" onClick={() => handleClickOpen()}>
        Compare
      </Button>
      <DataTable setLimit={setLimit} data={data} />
      <SimpleDialog data={data} open={open} onClose={handleClose} />
    </>
  )
}

export default Main;
