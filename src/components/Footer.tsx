import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Copyright() {
    return (
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            {'Copyright © '}
            &nbsp;
        </Typography>
    );
}

export default function Footer() {
    return (
        <React.Fragment>
            <Divider />
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: 4, sm: 8 },
                    textAlign: { sm: 'center', md: 'left' },
                    paddingBottom: 8
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        pt: { xs: 4, sm: 8 },
                        width: '100%',
                    }}
                >
                    <div>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <a href="https://github.com/dylan-mulligan/personal-website" target="_blank" rel="noopener noreferrer" style={{ color: 'gray' }}>
                                View source code
                            </a>
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                            Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'gray' }}>React</a>, <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'gray' }}>TypeScript</a>, and <a href="https://mui.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'gray' }}>MUI</a>.
                        </Typography>
                    </div>
                    <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        sx={{ justifyContent: 'left', color: 'text.secondary' }}
                    >
                        <IconButton
                            color="inherit"
                            size="large"
                            href="https://github.com/dylan-mulligan/"
                            aria-label="GitHub"
                            sx={{ alignSelf: 'center' }}
                        >
                            <GitHubIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            size="large"
                            href="https://www.linkedin.com/in/dylan-mulligan-se/"
                            aria-label="LinkedIn"
                            sx={{ alignSelf: 'center' }}
                        >
                            <LinkedInIcon fontSize="inherit" />
                        </IconButton>
                    </Stack>
                </Box>
            </Container>
        </React.Fragment>
    );
}