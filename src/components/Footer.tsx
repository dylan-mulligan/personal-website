import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {Button, Link} from "@mui/material";
import {IconBrandGithub} from "@tabler/icons-react";

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
                    paddingBottom: 8,
                    marginLeft: 0,
                    marginRight: 0
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Button
                            color="inherit"
                            size="medium"
                            href="https://github.com/dylan-mulligan/personal-website"
                            target="_blank"
                            startIcon={<IconBrandGithub />}
                            sx={{ marginLeft: 0, width: 150, mt: 4, mb: 1 }}
                            variant="contained"
                        >
                            Source Code
                        </Button>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, mr: 2 }}>
                            Built with <Link
                                href="https://reactjs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'gray' }}
                            >
                                React
                            </Link>, <Link
                                href="https://www.typescriptlang.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'gray' }}
                            >
                                TypeScript
                            </Link>, <Link
                                href="https://mui.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'gray' }}
                            >
                                Material-UI
                            </Link>, and <Link
                            href="https://tabler-icons.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'gray' }}
                        >
                            Tabler
                        </Link>.
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, mr: 2 }}>
                            <Link
                                href="https://workers.cloudflare.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'gray' }}
                            >
                                Automatically
                            </Link> deployed to <Link
                            href="https://pages.cloudflare.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'gray' }}
                        >
                            Cloudflare Pages
                        </Link>, with <Link
                            href="https://www.cloudflare.com/developer-platform/products/r2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'gray' }}
                        >
                            Cloudflare R2
                        </Link> for asset hosting and caching.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    );
}