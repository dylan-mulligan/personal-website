import * as React from 'react';
import {
    styled, useTheme, useMediaQuery,
    Box, AppBar, Toolbar,
    Container, Typography
} from '@mui/material';

import type {} from '@mui/material/themeCssVarsAugmentation';
import { keyframes } from '@mui/system';

import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';
import Logo from './Logo';

const wave = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
`;

const colorChange = keyframes`
    0%, 100% { color: #ff0000; }
    16.67% { color: #ff7f00; }
    33.33% { color: #ffff00; }
    50% { color: #00ff00; }
    66.67% { color: #0000ff; }
    83.33% { color: #8b00ff; }
`;

const AnimatedTypography = styled(Typography)<{ animation: string; index: number }>(({ theme, animation, index }) => ({
    display: 'inline-block',
    '&:hover span': {
        animationTimingFunction: 'ease-in-out',
        animationDelay: `${index * 0.15}s`,
    },
    '& span': {
        display: 'inline-block',
        transition: 'animation 0.5s ease-in-out',
        animationPlayState: 'paused',
    },
}));

export default function NavBar() {
    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        backdropFilter: 'blur(24px)',
        backgroundColor: 'transparent',
        boxShadow: (theme.vars || theme).shadows[1],
        padding: '8px 12px',
        borderRadius: 0, // Removed border radius
    });


    return (
        <AppBar
            position="sticky"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                backgroundColor: theme.palette.mode === 'dark' ?
                    'rgba(27, 27, 27, 0.5)' :
                    'rgba(255, 255, 255, 0.5)',
                backgroundImage: 'none',
                top: 0,
                left: 0,
                right: 0,
                zIndex: theme.zIndex.appBar,
            }}
        >
            <Container maxWidth="xl" disableGutters>
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{ display: 'flex', alignItems: 'center', px: 0 }}>
                        <Logo />
                    </Box>
                    {!isSmallScreen && (
                        <Typography
                            variant="h3"
                            component="div"
                            sx={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                color: theme.palette.text.primary,
                            }}
                        >
                            Dylan Mulligan
                        </Typography>
                    )}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 1,
                            alignItems: 'center',
                        }}
                    >
                        <ColorModeIconDropdown />
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}
