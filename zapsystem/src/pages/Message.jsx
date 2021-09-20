import React, { useEffect, useState } from 'react';
import api from '../services/api';
import MySelect from '../components/MySelect';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';


const Message = () => {


    const [optionSelectedTriggers, setOptionSelectedTriggers] = useState('')
    const [optionSelectedChannels, setOptionSelectedChannels] = useState('')

    const [optionsTriggers, setOptionsTriggers] = useState([])
    const [optionsChannels, setOptionsChannels] = useState([])

    const handleGetOptionsTriggers = async () => {
        try {
            const response = await api.get('/triggers');
            const optionsFormatted = response.data.map(item => {
                return {
                    label: item.name,
                    value: item.name
                }
            });

            setOptionsTriggers(optionsFormatted);
        } catch (error) {
        }
    }

    const handleGetOptionsChannels = async () => {
        try {
            const response = await api.get('/channels');
            const optionsFormatted = response.data.map(item => {
                return {
                    label: item.name,
                    value: item.name
                }
            });

            setOptionsChannels(optionsFormatted);
        } catch (error) {
        }
    }



    useEffect(() => {
        handleGetOptionsTriggers();
        handleGetOptionsChannels();
    }, []);

    const handleChangeSelectTriggers = (event) => {
        setOptionSelectedTriggers(event.target.value)
    }

    const handleChangeSelectChannels = (event) => {
        setOptionSelectedChannels(event.target.value)
    }

    return (
        <Container maxWidth='md'>

            <div className='mensagens'>

                <h1>Mensagens</h1>
                <form>
                    <Stack spacing={2} direction="row">

                        <Button variant="outlined" color="primary">Pesquisar</Button>

                        <Link to="/newmessage"><Button variant="contained" color="primary">Nova Mensagem</Button></Link>
                    </Stack>
                </form>

            </div>

            <Container maxWidth='md'>
                <div className="select">

                    <MySelect
                        label='Gatilho'
                        options={optionsTriggers}
                        value={optionSelectedTriggers}
                        onChange={handleChangeSelectTriggers}
                    />

                    <MySelect
                        label='Canal'
                        options={optionsChannels}
                        value={optionSelectedChannels}
                        onChange={handleChangeSelectChannels}
                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="Timer"
                        variant="outlined"
                    />

                </div>
            </Container>

            <Container maxWidth='md'>
                <table border="1" style={{ width: '70%' }}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Elemento1</td>
                            <td><button>Mensagens</button></td>
                        </tr>
                    </tbody>
                </table>


            </Container>

        </Container>
    );
}

export default Message;