import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@mui/material';


const Cabecalho = () => {
    return (
        <div className="fundo">
            <Container maxWidht='lg'>
                <header className="menu">
                    <span> ZAPSystem</span>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/"><Button variant="text" >Home</Button></Link>
                            </li>
                            <li>
                                <Link to="/deshboard"><Button variant="text">Dashboard</Button></Link>
                            </li>
                            <li>
                                <Link to="/message"><Button variant="text">Message</Button></Link>
                            </li>
                        </ul>
                    </nav>

                </header>
            </Container>
        </div>
    );
}

export default Cabecalho
