import React, { useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';
import * as yup from 'yup';

import { Container } from '@mui/material';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';


const schema = yup.object().shape({
    name: yup.string().required('Campo é obrigatório').min(2, 'nome é muito curto'),
    timer: yup.string().email()
})


const NewMessage = () => {

    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();

            await schema.validate({ name })

            /*
             if(name === '') {
               Swal.fire('Nome é vazio');
               return;
             }
            */

            setLoading(true)

            const response = await api.post('/Messages', {
                name: name
            })

            Swal.fire('Cadastrado com sucesso');

            setName('');
            setLoading(false);

            console.log(response.data)
        } catch (error) {
            Swal.fire(error.errors[0]);
        }


    }

    return (
        <Container maxWidth='md'>

            <Container maxWidth='md'>
                <div className='mensagens'>
                    <h1>Mensagens</h1>
                    <form>
                        <Stack spacing={2} direction="row">

                            <Link to="/message"><Button variant="outlined" color="primary">Voltar</Button></Link>

                            <Button variant="contained" color="primary">Cadastrar</Button>

                        </Stack>
                    </form>
                </div>
            </Container>

            <form onSubmit={handleSubmit} style={{ margin: '50px', display: 'flex', gap: '10px', flexDirection: 'column' }}>
                <label>Nome:</label>
                <textarea value={name} onChange={(event) => setName(event.target.value)} rows="10" />


                {
                    loading === true
                        ? 'Salvando ...'
                        : <button type="submit">Cadastrar</button>
                }
            </form>
        </Container>
    );
}


export default NewMessage;
