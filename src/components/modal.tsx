/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { MyContext } from '../context/context';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ModalComponent = () => {
	const { state, setState, characterSelected } = useContext(MyContext);

  const handleClickOpen = () => {
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };

  return (
    <div>
      <Dialog
        open={state}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{characterSelected?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
					<h2>
						Name: {characterSelected?.name}
						<span>&rarr;</span>
					</h2>
					<img src={characterSelected?.image} alt={characterSelected?.name} />
					<ul>
						<li>Origin: {characterSelected?.origin.name}</li>
						<li>Specie: {characterSelected?.species}</li>
						<li>Gender: {characterSelected?.gender}</li>
						<li>Status: {characterSelected?.status}</li>
					</ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}