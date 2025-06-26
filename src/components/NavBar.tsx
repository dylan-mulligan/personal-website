import * as React from 'react';
import {
    styled, useTheme, useMediaQuery,
    Box, AppBar, Toolbar,
    Container, Typography,
    IconButton, Drawer
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Importing the theme augmentation for MUI
// @ts-ignore
import type {} from '@mui/material/themeCssVarsAugmentation';

import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';
import Logo from './Logo';
import TableOfContents from './TableOfContents';

export default function NavBar() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isLargeScreenDown = useMediaQuery(theme.breakpoints.down('lg'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerOpen = () => setDrawerOpen(true);
    const handleDrawerClose = () => setDrawerOpen(false);

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
                        {isLargeScreenDown && (
                            <IconButton
                                color="inherit"
                                aria-label="open table of contents"
                                onClick={handleDrawerOpen}
                                sx={{ ml: 1 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Box>
                </StyledToolbar>
            </Container>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerClose}
                ModalProps={{ keepMounted: true }}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 320,
                        boxSizing: 'border-box',
                        padding: 2,
                        backgroundColor: theme.palette.mode === 'dark'
                            ? 'rgba(27,27,27,0.15)'
                            : 'rgba(255,255,255,0.10)',
                        backdropFilter: 'blur(8px)',
                    },
                    '& .MuiBackdrop-root': {
                        backgroundColor: theme.palette.mode === 'dark'
                            ? 'rgba(27,27,27,0.3)'
                            : 'rgba(255,255,255,0.15)',
                        backdropFilter: 'none',
                    },
                }}
            >
                <Box sx={{ width: '100%', p: 2 }}>
                    <TableOfContents sxOverride={{ mx: 0 }} onItemClick={handleDrawerClose} />
                </Box>
            </Drawer>
        </AppBar>
    );
}
