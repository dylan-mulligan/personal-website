import React from 'react';
import { Box, ListItemText, Button } from '@mui/material';
import { IconBrandGithub } from '@tabler/icons-react';

interface ListItemContentProps {
    title: string;
    subtitle: string;
    projectUrl?: string;
    isXSmallScreen: boolean;
    onClick: (event: any) => void;
}

const ListItemContent: React.FC<ListItemContentProps> = ({ title, subtitle, projectUrl, isXSmallScreen, onClick }) => (
    <Box sx={{ display: "flex", alignItems: "left", flexGrow: 1, justifyContent: "flex-start", flexDirection: "column" }}>
        <ListItemText
            primary={title}
            secondary={subtitle}
            sx={{ width: isXSmallScreen ? 250 : 325, flexGrow: 0 }}
        />
        {projectUrl &&
            <Button
                color="inherit"
                size="medium"
                href={projectUrl}
                target="_blank"
                startIcon={<IconBrandGithub />}
                sx={{ marginLeft: 0, width: 150 }}
                onClick={onClick}
                variant="contained"
            >
                Source Code
            </Button>
        }
    </Box>
);

export default ListItemContent;