import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import './index.css';
import App from './App';

/*
 * Color palettes expressed in OKLCH for perceptually uniform lightness steps.
 */
const theme = createTheme({
    colors: {
        // Rose — hue ≈ 5° (cool pink → deep crimson)
        rose: [
            'oklch(0.9405 0.0282 355.27)', // [0] lightest blush
            'oklch(0.8533 0.0749 356.28)', // [1]
            'oklch(0.7657 0.1276 358.94)', // [2]
            'oklch(0.7066 0.1736 359.46)', // [3]
            'oklch(0.6566 0.2083   4.16)', // [4]
            'oklch(0.6810 0.1796  14.15)', // [5] primary accent
            'oklch(0.5738 0.2178   7.84)', // [6]
            'oklch(0.4898 0.1868   2.52)', // [7]
            'oklch(0.4152 0.1605 355.68)', // [8]
            'oklch(0.3000 0.1103  13.42)', // [9] darkest
        ],

        // Orange — hue ≈ 65° (warm cream → deep rust)
        orange: [
            'oklch(0.9685 0.0281  79.47)', // [0] page background
            'oklch(0.8741 0.1102  76.47)', // [1]
            'oklch(0.8287 0.1452  73.54)', // [2] card border
            'oklch(0.7972 0.1637  69.61)', // [3]
            'oklch(0.7703 0.1741  64.05)', // [4]
            'oklch(0.7748 0.1434  47.57)', // [5]
            'oklch(0.6311 0.1970  40.25)', // [6]
            'oklch(0.5363 0.1798  35.36)', // [7]
            'oklch(0.5017 0.1887  27.47)', // [8]
            'oklch(0.3725 0.1528  29.23)', // [9] darkest
        ],

        // Yellow — hue ≈ 102° (pale lemon → golden amber)
        yellow: [
            'oklch(0.9739 0.0681 102.21)', // [0]
            'oklch(0.9588 0.1092 102.65)', // [1]
            'oklch(0.9454 0.1443 102.86)', // [2]
            'oklch(0.9365 0.1657 102.82)', // [3]
            'oklch(0.9285 0.1802 102.51)', // [4]
            'oklch(0.8782 0.1510  88.93)', // [5]
            'oklch(0.8392 0.1614  84.38)', // [6]
            'oklch(0.7172 0.1748  53.46)', // [7]
            'oklch(0.8618 0.1820 104.10)', // [8]
            'oklch(0.7056 0.1454  98.38)', // [9] darkest
        ],

        // Teal — hue ≈ 145° (mint → deep forest)
        teal: [
            'oklch(0.8952 0.0503 146.12)', // [0]
            'oklch(0.8292 0.0826 145.86)', // [1]
            'oklch(0.7660 0.1179 145.33)', // [2]
            'oklch(0.7185 0.1417 144.91)', // [3]
            'oklch(0.6731 0.1624 144.23)', // [4]
            'oklch(0.5840 0.0808 168.85)', // [5]
            'oklch(0.5234 0.1346 144.19)', // [6]
            'oklch(0.4254 0.1159 144.33)', // [7]
            'oklch(0.2782 0.0947 142.51)', // [8]
            'oklch(0.1378 0.0469 142.51)', // [9] darkest
        ],
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