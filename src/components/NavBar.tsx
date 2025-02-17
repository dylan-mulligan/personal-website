import * as React from 'react';
import { alpha, styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';
import Logo from './Logo';
import type {} from '@mui/material/themeCssVarsAugmentation';
import { keyframes } from '@mui/system';
import Typography from '@mui/material/Typography';

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
        animation: `${animation} 2s infinite`,
        animationTimingFunction: 'ease-in-out',
        animationDelay: `${index * 0.15}s`,
        animationPlayState: 'running',
    },
    '& span': {
        display: 'inline-block',
        transition: 'animation 0.5s ease-in-out',
        animationPlayState: 'paused',
    },
}));


export default function NavBar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
        backdropFilter: 'blur(24px)',
        border: '1px solid',
        borderColor: (theme.vars || theme).palette.divider,
        backgroundColor: theme.vars
            ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
            : alpha(theme.palette.background.default, 0.4),
        boxShadow: (theme.vars || theme).shadows[1],
        padding: '8px 12px',
    });

    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                mt: 'calc(var(--template-frame-height, 0px) + 28px)',
            }}
        >
            <Container maxWidth="lg">
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{ display: 'flex', alignItems: 'center', px: 0 }}>
                        <Logo />
                    </Box>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: { xs: 'none', sm: 'block'},
                            color: theme.palette.text.primary,
                        }}
                    >
                        Dylan Mulligan
                    </Typography>
                    {/*<AnimatedTypography
                        animation={colorChange}
                        variant="h3"
                        sx={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: { xs: 'none', sm: 'block' },
                        }}
                    >
                        {'Dylan Mulligan'.split('').map((char, index) => (
                            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                              {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </AnimatedTypography>*/}
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            gap: 1,
                            alignItems: 'center',
                        }}
                    >
                        <Button color="primary" variant="text" size="small">
                            Sign in
                        </Button>
                        <ColorModeIconDropdown />
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 1 }}>
                        <ColorModeIconDropdown size="medium" />
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                                sx: {
                                    top: 'var(--template-frame-height, 0px)',
                                },
                            }}
                        >
                            <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                <MenuItem>
                                    <Button color="primary" variant="outlined" fullWidth>
                                        Sign in
                                    </Button>
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}