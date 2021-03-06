import React from 'react';
import { Grid, Button, TextField } from '@material-ui/core/';

const Contatos = () => {
    return(
        //Cuidado ao usar componentes irmãos, nesse caso foi necessário utilizar o <> ou React.Fragment. 
        <>
            <Grid container direction="row" xs={12}>
                <TextField id="name" label="Name" fullWidth/>
                <TextField id="message" label="Message" fullWidth/>
            </Grid>
            <Button variant="contained" color="primary">
                Sent
            </Button>
        </>
    )
}

export default Contatos;
