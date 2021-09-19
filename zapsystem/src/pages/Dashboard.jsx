import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import '../App.css';
import { Container } from '@mui/material';

const databar = {
    labels: ['Zapelino', 'OI', 'BRB', 'BRB Nação'],
    datasets: [
        {
            label: 'Quantidade de contas abertas',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const optionsbar = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Contas Abertas - BOT',
        },
    },
};

const dataline = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    datasets: [
        {
            label: 'Quantidade de transações PIX',
            data: [1100, 13000, 2880, 1280, 2980, 6500, 1220, 13020, 4500, 5800, 2400, 3800, 1800, 13140, 3800, 7800, 8400, 4400, 9000, 3000],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

const optionsline = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};


const Deshboard = () => {
    return (
        <Container maxWidth='lg'>

            <div className='grafico'>
                <Bar
                    data={databar}
                    options={optionsbar}
                />
            </div>

            <div className='grafico'>
                <Line data={dataline} options={optionsline} />
            </div>

        </Container>
    );
}

export default Deshboard