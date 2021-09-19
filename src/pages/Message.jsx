import { useEffect, useState } from 'react';
import api from '../services/api';
import MySelect from '../components/MySelect';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { Container } from '@mui/material';



const Message = () => {


    const [optionSelected, setOptionSelected] = useState('')

    const [optionsTriggers, setOptionsTriggers] = useState([])
    const [optionsChannels, setOptionsChannels] = useState([])
    const [optionsTimer, setOptionsTimer] = useState([])

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

    const handleGetOptionsTimer = async () => {
        try {
            const response = await api.get('/messages');
            const optionsFormatted = response.data.map(item => {
                return {
                    label: item.timer,
                    value: item.timer
                }
            });

            setOptionsTimer(optionsFormatted);
        } catch (error) {
        }
    }

    useEffect(() => {
        handleGetOptionsTriggers();
        handleGetOptionsChannels();
        handleGetOptionsTimer();
    }, []);

    const handleChanceSelect = (event) => {
        setOptionSelected(event.target.value)

    }


    return (
        <Container maxWidth='lg'>

            <div className='menu'>
                <h1>Messagens</h1>
                <form>
                    <Button variant="contained" color="primary">Pesquisar</Button>

                    <Link to="/newmessage"><Button variant="contained" color="primary">Nova Mensagem</Button></Link>
                </form>
            </div>

            <Container maxWidth='md'>
                <div className="select">
    
                <MySelect
                    label='Gatilho'
                    options={optionsTriggers}
                    value={optionSelected}
                    onChange={handleChanceSelect}
                />
   
                <MySelect
                    label='Canal'
                    options={optionsChannels}
                    value={optionSelected}
                    onChange={handleChanceSelect}
                />
  
                <MySelect
                    label='Timer'
                    options={optionsTimer}
                    value={optionSelected}
                    onChange={handleChanceSelect}
                />

                </div>
           
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

        </Container>
    );
}

export default Message;