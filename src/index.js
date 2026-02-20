import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import './index.css';
import App from './App';

const theme = createTheme({
    colors: {
        rose: ['#fce4ec', '#f8bbd0', '#f48fb1', '#f36b9d', '#f14882', '#F26076', '#d81b60', '#ad1457', '#880e4f', '#58081d'],
        orange: ['#fff3e0', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#FF9760', '#e65100', '#bf360c', '#b71c1c', '#7e0000'],
        yellow: ['#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#FFD150', '#fbc02d', '#f57f17', '#e6d600', '#b8a003'],
        teal: ['#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#458B73', '#2e7d32', '#1b5e20', '#003300', '#000d00'],
    },
    primaryColor: 'rose',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MantineProvider theme={theme}>
            <App />
        </MantineProvider>
    </React.StrictMode>
);