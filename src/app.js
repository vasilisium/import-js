import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const clolorGrey = '#868686';
const colorBlack = '#000';
const currentColor = clolorGrey;
const clolorGreen1 = '#239b2c';
const clolorGreen2 = '#46d751';

const useStyle = makeStyles((theme)=>({
  dragndrop: {
    width: '95vw',
    height: '95vh',
    padding: '7px',
    borderRadius: '15px',
    margin:'auto'
  },
  dashedBorder: {
    border:' 2px dashed',
    borderColor: clolorGrey,
    borderRadius: '8px',
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr'
  },
  serviceStatus: {
    margin: '5px auto 0 auto',
    color: clolorGreen1,
  },
  innerDiv:{
    margin: 'auto',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
  },
  uploadText:{
    margin: 'auto',
    color: clolorGrey,
  },
  btnUpload: {
    margin: '20px auto 0 auto',
    padding: '10px',
    width: '200px',
    color: clolorGrey,
  }
}))

export const App = () => {
  const classes = useStyle();

  return (
      <Paper elevation={6} className={classes.dragndrop}>
        <div className={classes.dashedBorder}>

          <div className={classes.serviceStatus}>
            Service is up. Waiting for files to upload...
          </div>

          <div className={classes.innerDiv}>
            <div className={classes.uploadText}>
              Drag files here to upload,c or click the button below to select files
            </div>
            <Button className={classes.btnUpload} variant={'outlined'}>
              Upload  files
            </Button>
          </div>

        </div>
      </Paper>
  )
}