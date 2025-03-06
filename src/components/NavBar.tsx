import * as React from 'react';
import {
    alpha, styled, useTheme, useMediaQuery,
    Box, AppBar, Toolbar, Button, IconButton,
    Container, MenuItem, Drawer, Typography
} from '@mui/material';

import type {} from '@mui/material/themeCssVarsAugmentation';

import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { keyframes } from '@mui/system';

import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';
import LoginModal from './LoginModal';
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
    const [open, setOpen] = React.useState(false);
    const [loginModalOpen, setLoginModalOpen] = React.useState(false);

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleLoginModalOpen = () => {
        setLoginModalOpen(true);
    };

    const handleLoginModalClose = () => {
        setLoginModalOpen(false);
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
                        {/*<Button color="primary" variant="text" size="small" onClick={handleLoginModalOpen}>*/}
                        {/*    Sign in*/}
                        {/*</Button>*/}
                        <ColorModeIconDropdown />
                    </Box>
                    {/*<Box sx={{ display: isSmallScreen ? 'flex' : 'none', gap: 1 }}>
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
                                    <Button color="primary" variant="text" size="small" onClick={handleLoginModalOpen}>
                                        Sign in
                                    </Button>
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>*/}
                </StyledToolbar>
                <LoginModal open={loginModalOpen} handleClose={handleLoginModalClose} />
            </Container>
        </AppBar>
    );
}