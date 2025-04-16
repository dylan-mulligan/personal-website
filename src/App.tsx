import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from './shared-theme/AppTheme';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import GradientBackground from './components/GradientBackground';

export default function App(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props}>
            <GradientBackground/>
            <CssBaseline enableColorScheme/>
            <NavBar/>
            <Container
                maxWidth="lg"
                component="main"
                sx={{display: 'flex', flexDirection: 'column', my: 16, gap: 4, pr: '12px !important', pl: '12px !important'}}
            >
                <Portfolio/>
            </Container>
            <Footer/>
        </AppTheme>
    );
}